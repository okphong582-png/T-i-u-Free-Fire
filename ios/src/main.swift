import UIKit
import WebKit

class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        window = UIWindow(frame: UIScreen.main.bounds)
        let viewController = WebViewController()
        window?.rootViewController = viewController
        window?.makeKeyAndVisible()
        return true
    }
}

class WebViewController: UIViewController, WKNavigationDelegate, WKUIDelegate {
    var webView: WKWebView!

    // Exact Apple Hardware Model Detection (IP11, IP12, IP13, IP14, IP15, etc.)
    func getExactDeviceModel() -> String {
        var systemInfo = utsname()
        uname(&systemInfo)
        let machineMirror = Mirror(reflecting: systemInfo.machine)
        let identifier = machineMirror.children.reduce("") { identifier, element in
            guard let value = element.value as? Int8, value != 0 else { return identifier }
            return identifier + String(UnicodeScalar(UInt8(value)))
        }

        let modelMap: [String: String] = [
            // iPhone 16 series
            "iPhone17,1": "IP16 Pro",
            "iPhone17,2": "IP16 Pro Max",
            "iPhone17,3": "IP16",
            "iPhone17,4": "IP16 Plus",
            // iPhone 15 series
            "iPhone16,1": "IP15 Pro",
            "iPhone16,2": "IP15 Pro Max",
            "iPhone15,4": "IP15",
            "iPhone15,5": "IP15 Plus",
            // iPhone 14 series
            "iPhone15,2": "IP14 Pro",
            "iPhone15,3": "IP14 Pro Max",
            "iPhone14,7": "IP14",
            "iPhone14,8": "IP14 Plus",
            // iPhone 13 series
            "iPhone14,5": "IP13",
            "iPhone14,2": "IP13 Pro",
            "iPhone14,3": "IP13 Pro Max",
            "iPhone14,4": "IP13 mini",
            // iPhone 12 series
            "iPhone13,2": "IP12",
            "iPhone13,3": "IP12 Pro",
            "iPhone13,4": "IP12 Pro Max",
            "iPhone13,1": "IP12 mini",
            // iPhone 11 series
            "iPhone12,1": "IP11",
            "iPhone12,3": "IP11 Pro",
            "iPhone12,5": "IP11 Pro Max",
            // iPhone XS / XR / X
            "iPhone11,2": "IP XS",
            "iPhone11,4": "IP XS Max",
            "iPhone11,6": "IP XS Max",
            "iPhone11,8": "IP XR",
            "iPhone10,3": "IP X",
            "iPhone10,6": "IP X",
            // iPhone SE
            "iPhone14,6": "IP SE 3",
            "iPhone12,8": "IP SE 2",
            // iPhone 8 / 7 / 6s
            "iPhone10,1": "IP8",
            "iPhone10,4": "IP8",
            "iPhone10,2": "IP8 Plus",
            "iPhone10,5": "IP8 Plus",
            // iPad
            "iPad13,18": "iPad 10",
            "iPad13,19": "iPad 10",
            "iPad14,3": "iPad Pro 11 M2",
            "iPad14,4": "iPad Pro 11 M2",
            "iPad14,5": "iPad Pro 12.9 M2",
            "iPad14,6": "iPad Pro 12.9 M2"
        ]

        return modelMap[identifier] ?? (identifier.hasPrefix("iPhone") ? "IP" + identifier.replacingOccurrences(of: "iPhone", with: "").replacingOccurrences(of: ",", with: ".") : "iPhone")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor.black

        let exactModel = getExactDeviceModel()
        let iosVer = "iOS " + UIDevice.current.systemVersion

        // User script to inject exact hardware specs before webview loads
        let userContentController = WKUserContentController()
        let injectScript = """
            window.NATIVE_EXACT_MODEL = '\(exactModel)';
            window.NATIVE_EXACT_IOS = '\(iosVer)';
            console.log('[NativeBridge] Exact device model injected: \(exactModel) on \(iosVer)');
        """
        let userScript = WKUserScript(source: injectScript, injectionTime: .atDocumentStart, forMainFrameOnly: true)
        userContentController.addUserScript(userScript)
        
        let config = WKWebViewConfiguration()
        config.userContentController = userContentController
        config.allowsInlineMediaPlayback = true
        config.mediaTypesRequiringUserActionForPlayback = []
        config.preferences.javaScriptEnabled = true
        config.preferences.setValue(true, forKey: "allowFileAccessFromFileURLs")
        
        webView = WKWebView(frame: UIScreen.main.bounds, configuration: config)
        webView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        webView.isOpaque = false
        webView.backgroundColor = .black
        webView.scrollView.backgroundColor = .black
        webView.scrollView.bounces = false
        webView.scrollView.contentInsetAdjustmentBehavior = .never
        webView.navigationDelegate = self
        webView.uiDelegate = self
        
        view.addSubview(webView)
        
        // Load local index.html from bundle
        if let htmlPath = Bundle.main.path(forResource: "index", ofType: "html") {
            let htmlURL = URL(fileURLWithPath: htmlPath)
            webView.loadFileURL(htmlURL, allowingReadAccessTo: Bundle.main.bundleURL)
        } else {
            let bundleURL = Bundle.main.bundleURL.appendingPathComponent("index.html")
            webView.loadFileURL(bundleURL, allowingReadAccessTo: Bundle.main.bundleURL)
        }
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        webView.frame = view.bounds
    }
    
    // Handle external URL schemes (freefire://, freefiremax://) and notify JS
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        if let url = navigationAction.request.url {
            let scheme = url.scheme?.lowercased() ?? ""
            if scheme != "file" && scheme != "http" && scheme != "https" {
                if UIApplication.shared.canOpenURL(url) {
                    UIApplication.shared.open(url, options: [:]) { success in
                        if success {
                            webView.evaluateJavaScript("window.onGameLaunchSuccess && window.onGameLaunchSuccess();", completionHandler: nil)
                        } else {
                            webView.evaluateJavaScript("window.onGameLaunchFailed && window.onGameLaunchFailed();", completionHandler: nil)
                        }
                    }
                    decisionHandler(.cancel)
                    return
                } else {
                    // Game is not installed
                    webView.evaluateJavaScript("window.onGameLaunchFailed && window.onGameLaunchFailed();", completionHandler: nil)
                    decisionHandler(.cancel)
                    return
                }
            }
        }
        decisionHandler(.allow)
    }

    override var prefersStatusBarHidden: Bool {
        return true
    }
    
    override var prefersHomeIndicatorAutoHidden: Bool {
        return true
    }
    
    override var supportedInterfaceOrientations: UIInterfaceOrientationMask {
        return .portrait
    }
}

// Top level execution entry point for Swift main.swift
UIApplicationMain(
    CommandLine.argc,
    CommandLine.unsafeArgv,
    nil,
    NSStringFromClass(AppDelegate.self)
)
