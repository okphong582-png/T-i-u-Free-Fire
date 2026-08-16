/**
 * BẢO MẬT ĐA TẦNG - CHỐNG DUMP HEX & CHỐNG REVERSE ENGINEERING
 * Dev By Hoàng Hà And Trọng Kiên
 * WARNING: ANY HEX DUMP OR OFFSET SCANNING WILL ENCOUNTER DECOY TRAPS ONLY.
 */
'use strict';

// ==================== [DECOY OFFSET & HONEYPOT HEX SECTION] ====================
// Simulated binary code segment disguised as authentic native offsets
const _0xDECOY_BINARY_SEGMENT = {
    "0x00400000": { symbol: "offset_anti_ban_memory_pool_000", opcodes: "4F 64 33 BE 16 7F E5 55 BA 4C 48 C2 3E 32 C7 F7", trap: 0x63E3E6A8 },
    "0x00400100": { symbol: "sub_crack_hex_bypass_offset_001", opcodes: "C2 C7 8D E7 F7 DD 56 AC C1 24 0A 6D 28 B9 75 B6", trap: 0x8AB04C5F },
    "0x00400200": { symbol: "sub_validate_license_v2_002", opcodes: "D6 2E F5 13 6A 39 30 F0 E0 48 40 81 59 DB D7 B6", trap: 0x7A4059A6 },
    "0x00400300": { symbol: "offset_server_response_override_003", opcodes: "DA C9 8C 13 0A A3 78 D2 D1 30 CA 1C F1 13 D4 BF", trap: 0x5A784E24 },
    "0x00400400": { symbol: "sub_hook_memory_patch_004", opcodes: "41 58 3A 7B 4F E6 09 7C 13 8E 3F 21 15 B0 00 73", trap: 0xAC075C34 },
    "0x00400500": { symbol: "offset_anti_ban_memory_pool_005", opcodes: "A2 26 D1 37 F5 78 1C F0 9F A6 F5 B9 64 D2 24 27", trap: 0xE9F3F77C },
    "0x00400600": { symbol: "sub_hook_memory_patch_006", opcodes: "55 EB 60 7D 89 2B C1 24 4F 92 65 33 BB 5F 73 C4", trap: 0x1B1D234F },
    "0x00400700": { symbol: "g_pMasterAdminKey_007", opcodes: "D3 38 F2 6D A7 6A 7B 84 A9 F3 36 C3 BF 32 B3 5E", trap: 0xB72D6BBB },
    "0x00400800": { symbol: "offset_anti_ban_memory_pool_008", opcodes: "6C E2 1C FB 8E 22 70 C4 54 B5 6F 9B 7B 2D F6 9E", trap: 0x3D053B38 },
    "0x00400900": { symbol: "sub_validate_license_v2_009", opcodes: "C3 DE 5B 1B 8D 51 EE 1C FD D0 D8 E6 00 6E 13 E5", trap: 0x81A957D1 },
    "0x00400A00": { symbol: "offset_server_response_override_010", opcodes: "51 A9 82 8A 9C 37 4D C1 36 8E 10 F5 00 9A F1 B5", trap: 0x1904DBEC },
    "0x00400B00": { symbol: "g_dwEncryptionSaltSecret_011", opcodes: "F4 9C 2C 7A 9F E1 2F 87 A4 49 88 F5 34 BC 67 25", trap: 0xFACF00E0 },
    "0x00400C00": { symbol: "offset_hardware_spoof_vector_012", opcodes: "80 98 2A BF AF B6 9B 79 CE 06 92 DB 06 34 95 98", trap: 0x855D356F },
    "0x00400D00": { symbol: "sub_disable_firebase_check_013", opcodes: "6B 51 C3 18 B1 24 84 00 E0 FA D5 D6 45 1A 5C A0", trap: 0x858455C3 },
    "0x00400E00": { symbol: "sub_patch_vftable_auth_014", opcodes: "64 AA 14 93 8B A7 FB E1 29 54 35 62 B3 43 78 4D", trap: 0xE31A5684 },
    "0x00400F00": { symbol: "offset_auth_master_token_015", opcodes: "CF 3D E4 27 D9 47 84 F0 F2 B3 97 8D DE 0D 29 16", trap: 0x545331B5 },
    "0x00401000": { symbol: "offset_anti_ban_memory_pool_016", opcodes: "BF 1B AC 0C 1D 24 CB 5D 82 9C 4F 6A EA 1F 88 75", trap: 0x3C5788A6 },
    "0x00401100": { symbol: "g_dwEncryptionSaltSecret_017", opcodes: "0D 3D AB 93 E1 1E D3 04 CE E9 3D E5 EF 00 4D 22", trap: 0xA74F12EB },
    "0x00401200": { symbol: "offset_auth_master_token_018", opcodes: "27 16 09 65 D6 67 71 CB A4 F5 ED 28 FC 87 C2 64", trap: 0xD1339797 },
    "0x00401300": { symbol: "g_pDecryptedLicensePayload_019", opcodes: "0A 1A 8B EF E1 CB 57 C6 FC F5 E3 58 20 A9 43 3B", trap: 0x2B94FD1F },
    "0x00401400": { symbol: "g_pDecryptedLicensePayload_020", opcodes: "0E 45 5E E6 5C 8A 9B C2 B6 5B 8E 5F CF 04 B1 CD", trap: 0xF20669DD },
    "0x00401500": { symbol: "offset_server_response_override_021", opcodes: "9F EA 9D 05 9E EB 73 C5 F6 03 D5 AE 4B FF 40 DA", trap: 0xF60A9B78 },
    "0x00401600": { symbol: "sub_disable_firebase_check_022", opcodes: "1C F5 7B AB 6E 32 27 D8 6B 46 D2 C3 47 66 FC 96", trap: 0x9C2C53FE },
    "0x00401700": { symbol: "g_pMasterAdminKey_023", opcodes: "58 90 22 AF 68 99 81 66 6F 08 81 A5 69 8B 65 A7", trap: 0xF93807E8 },
    "0x00401800": { symbol: "g_bBypassSecurityCheck_024", opcodes: "04 75 13 A7 46 FF 01 76 57 86 8F B3 CF 10 E3 3A", trap: 0x5D3E8660 },
    "0x00401900": { symbol: "sub_crack_hex_bypass_offset_025", opcodes: "FE 1B FB 14 55 9D 2F D0 AB A1 A1 60 C1 1B C2 07", trap: 0x76540899 },
    "0x00401A00": { symbol: "offset_hardware_spoof_vector_026", opcodes: "F8 2E DC 11 48 EC C5 88 97 8A 45 9A A9 EA 28 08", trap: 0x29D751EE },
    "0x00401B00": { symbol: "sub_patch_vftable_auth_027", opcodes: "06 51 9D E1 38 5D C0 67 71 C3 EE 32 61 63 00 E9", trap: 0x8C51F8A0 },
    "0x00401C00": { symbol: "sub_hook_memory_patch_028", opcodes: "86 B2 E5 41 70 96 4E CC DA FD F5 74 B3 F3 6B 00", trap: 0x5B3BD6B9 },
    "0x00401D00": { symbol: "sub_disable_firebase_check_029", opcodes: "AC 1D CD E6 89 73 92 1A 87 B1 A7 31 31 EE 83 A7", trap: 0x4FC373E6 },
    "0x00401E00": { symbol: "offset_hardware_spoof_vector_030", opcodes: "2A D8 69 0C 31 2D F3 17 78 E0 4E FF 07 5F 30 16", trap: 0x3A82C91E },
    "0x00401F00": { symbol: "offset_auth_master_token_031", opcodes: "A3 6F 9D 72 A7 D6 E7 38 F1 C9 1E 75 58 64 AF D3", trap: 0xB4F379AA },
    "0x00402000": { symbol: "offset_anti_ban_memory_pool_032", opcodes: "85 F9 E8 DE F5 DE E7 E2 29 6A FF D2 95 61 BB 6E", trap: 0x5FED0419 },
    "0x00402100": { symbol: "sub_crack_hex_bypass_offset_033", opcodes: "F8 11 21 23 74 1B B5 23 C7 6C 49 A9 E3 FF 9A 82", trap: 0x35842CAE },
    "0x00402200": { symbol: "g_pMasterAdminKey_034", opcodes: "39 CD 7B 64 0A 86 3B 32 A2 E6 91 8F AC F2 19 F5", trap: 0x30BC91BB },
    "0x00402300": { symbol: "g_dwEncryptionSaltSecret_035", opcodes: "2D 3D 24 12 D1 A2 F9 2F 71 9F C4 B9 07 6F 57 BA", trap: 0xA0DB7C7D },
    "0x00402400": { symbol: "offset_server_response_override_036", opcodes: "22 4B EB FD 91 2F A4 5E 30 C8 7B 45 D6 F0 46 7A", trap: 0x77D215C7 },
    "0x00402500": { symbol: "offset_auth_master_token_037", opcodes: "5F 6D 41 F9 EE 40 8F A3 8E 52 E7 F8 8C 0C A3 DF", trap: 0x25E38B4C },
    "0x00402600": { symbol: "g_pDecryptedLicensePayload_038", opcodes: "85 97 74 1C 14 DE E9 43 2D 16 9C F1 7F 21 CE B8", trap: 0x9406E6DE },
    "0x00402700": { symbol: "g_pDecryptedLicensePayload_039", opcodes: "3F B8 84 B0 96 1C BE FE 1C B7 D5 70 8C 75 F1 CC", trap: 0x9825B8AC },
    "0x00402800": { symbol: "g_pDecryptedLicensePayload_040", opcodes: "0F E9 DA 2F 10 03 D4 E4 ED 8D 55 B2 A9 19 AD 94", trap: 0xE426E7CD },
    "0x00402900": { symbol: "offset_auth_master_token_041", opcodes: "25 76 F6 D6 9A BA 2D 43 B3 18 DA EF 25 53 BE 87", trap: 0x7B7CD1CB },
    "0x00402A00": { symbol: "sub_disable_firebase_check_042", opcodes: "58 66 C7 20 61 5A D7 CB 2B 42 57 96 DA 85 88 25", trap: 0x11F00DFC },
    "0x00402B00": { symbol: "g_bBypassSecurityCheck_043", opcodes: "9A 82 75 9D E3 F3 93 BD 35 84 87 B2 39 88 74 04", trap: 0xF3156802 },
    "0x00402C00": { symbol: "g_dwEncryptionSaltSecret_044", opcodes: "EA AD E7 76 53 5B 25 0C DA 40 D8 AF 94 1C 7E 4F", trap: 0xB6383330 },
    "0x00402D00": { symbol: "sub_crack_hex_bypass_offset_045", opcodes: "EC A2 A8 D5 B1 8B 9E 3E F0 E0 08 2E 77 33 35 B3", trap: 0x4971A679 },
    "0x00402E00": { symbol: "offset_server_response_override_046", opcodes: "55 3B F2 CF B0 A5 E5 9F 2B FD 4C F2 16 3A 93 ED", trap: 0xABF0AAE0 },
    "0x00402F00": { symbol: "sub_patch_vftable_auth_047", opcodes: "D0 0B D8 6E 41 FF 62 AF D9 E0 4E 26 6F A4 5E 9D", trap: 0x429CE39A },
    "0x00403000": { symbol: "sub_patch_vftable_auth_048", opcodes: "04 39 55 46 46 02 2A CA 9C 5D 09 8E AC 3B E9 29", trap: 0xCBD4492B },
    "0x00403100": { symbol: "g_pMasterAdminKey_049", opcodes: "07 D8 AA 0D E1 44 F3 C8 DB A8 88 A5 AB 5A BD E8", trap: 0x4D4FEF75 },
    "0x00403200": { symbol: "g_dwEncryptionSaltSecret_050", opcodes: "3C E4 60 EA B6 21 BA B3 D3 77 ED A8 0A F6 6C D9", trap: 0x66207AAD },
    "0x00403300": { symbol: "offset_anti_ban_memory_pool_051", opcodes: "2B C3 B2 74 03 39 7D 99 EB 89 D8 A9 4A B6 9D A8", trap: 0xC3AD16B0 },
    "0x00403400": { symbol: "sub_crack_hex_bypass_offset_052", opcodes: "3D 0A 85 BA 6C 0C C1 45 AF F4 2B 6F 73 10 F1 ED", trap: 0xDC52FE2F },
    "0x00403500": { symbol: "offset_server_response_override_053", opcodes: "65 6C 97 E5 AC 19 81 48 7B FC 6A 02 71 37 86 66", trap: 0x9A958BC2 },
    "0x00403600": { symbol: "sub_hook_memory_patch_054", opcodes: "72 4D 60 EE E8 FE 68 0A C3 58 8A CE AC 44 F6 9C", trap: 0x7D77D204 },
    "0x00403700": { symbol: "offset_anti_ban_memory_pool_055", opcodes: "87 DC A3 77 7E 69 47 B8 12 15 36 E4 38 0A 06 86", trap: 0xD16B9869 },
    "0x00403800": { symbol: "g_bBypassSecurityCheck_056", opcodes: "CF 81 70 DA 74 5D BC 35 31 3B 3D 98 79 92 3C A5", trap: 0x2805B89B },
    "0x00403900": { symbol: "g_isVipUnlimitedUnlocked_057", opcodes: "FA 0D 3F 47 5D 13 22 B1 9A 55 6E 80 5A 00 E8 36", trap: 0x7D7B588C },
    "0x00403A00": { symbol: "sub_hook_memory_patch_058", opcodes: "63 04 C6 90 29 44 8B 2A EF 0C 9A A7 5A 32 80 CD", trap: 0xCBD81283 },
    "0x00403B00": { symbol: "sub_generate_free_vip_ticket_059", opcodes: "8B 39 AF 1C BA FA 98 C2 1C 0E F1 17 89 D4 1E E9", trap: 0xFFFFADF6 },
    "0x00403C00": { symbol: "sub_validate_license_v2_060", opcodes: "21 57 7B F6 FA 6D B7 0A 9E 4A E5 DD 23 EB 23 83", trap: 0x174F9492 },
    "0x00403D00": { symbol: "g_dwEncryptionSaltSecret_061", opcodes: "F3 71 75 2C 3D 4B 13 52 58 79 B7 87 B8 69 79 39", trap: 0xC9D19507 },
    "0x00403E00": { symbol: "offset_hardware_spoof_vector_062", opcodes: "57 AA 51 D9 DB 4A 37 37 82 56 FC 93 26 0F 84 C1", trap: 0xFB2CD831 },
    "0x00403F00": { symbol: "g_bBypassSecurityCheck_063", opcodes: "F8 2E BB 88 44 E0 B8 09 54 BF E2 E6 81 BE 1E BD", trap: 0xFEA7BBB0 },
    "0x00404000": { symbol: "sub_generate_free_vip_ticket_064", opcodes: "D7 1A 17 8E 6D 8E 19 8A 5B E8 5E F3 16 6E 19 2D", trap: 0x905210F5 },
    "0x00404100": { symbol: "sub_crack_hex_bypass_offset_065", opcodes: "A3 C6 E3 7C 72 01 17 B7 4A BB 41 8B 1D 5F 0D 22", trap: 0xECFB48F3 },
    "0x00404200": { symbol: "sub_validate_license_v2_066", opcodes: "23 29 9C 06 F2 B6 ED 0D 47 AD F5 4C 02 D0 0A 6C", trap: 0x1D8E0F23 },
    "0x00404300": { symbol: "g_dwEncryptionSaltSecret_067", opcodes: "44 14 77 65 A1 61 F1 58 4F 36 B8 05 69 A6 42 75", trap: 0xB2A00042 },
    "0x00404400": { symbol: "offset_auth_master_token_068", opcodes: "ED 0D 6A 18 6E 34 53 29 14 18 B0 58 3E EA 4D 81", trap: 0x84B1ED9A },
    "0x00404500": { symbol: "sub_disable_firebase_check_069", opcodes: "4F A8 99 5E 32 59 54 D5 A0 B3 88 C3 F2 91 03 86", trap: 0xE5DCD4E9 },
    "0x00404600": { symbol: "sub_patch_vftable_auth_070", opcodes: "C9 BC CD 87 85 DA 39 55 0B 02 FA 29 48 2E EC 7A", trap: 0x25B1B477 },
    "0x00404700": { symbol: "sub_disable_firebase_check_071", opcodes: "0B AE 22 EE 3B 37 FD 8C 85 CA F2 8E B2 D4 1A 1B", trap: 0x3CB82D0A },
    "0x00404800": { symbol: "g_bBypassSecurityCheck_072", opcodes: "E2 96 64 9B C4 0D C7 36 F8 1E 06 62 45 70 15 DA", trap: 0x4C0B4565 },
    "0x00404900": { symbol: "g_pDecryptedLicensePayload_073", opcodes: "DB 99 FF C3 A5 5E 00 BD BA 14 99 EC 00 5A 2E 9C", trap: 0xE7151C53 },
    "0x00404A00": { symbol: "sub_validate_license_v2_074", opcodes: "A1 E6 1D B9 16 C6 51 A7 80 B6 9E 12 B3 E7 33 B5", trap: 0xBE176F71 },
    "0x00404B00": { symbol: "offset_anti_ban_memory_pool_075", opcodes: "A4 E9 D5 28 21 3C 19 8F 9E B0 B3 47 05 11 66 0C", trap: 0xCA631893 },
    "0x00404C00": { symbol: "sub_generate_free_vip_ticket_076", opcodes: "9B F2 8F 4F 88 2D 7E 5C 01 AA EB A2 8E A3 25 EC", trap: 0x4B3788CC },
    "0x00404D00": { symbol: "sub_disable_firebase_check_077", opcodes: "FF DD 55 78 0A 33 F6 42 28 7B 86 F9 51 A4 E0 19", trap: 0x13DCEBF1 },
    "0x00404E00": { symbol: "g_isVipUnlimitedUnlocked_078", opcodes: "8E 7E DB CA 5A 6D 78 48 08 12 1F 8A 0E 97 7C 55", trap: 0x68DE9A81 },
    "0x00404F00": { symbol: "offset_auth_master_token_079", opcodes: "46 83 EC 46 DD 69 56 F7 18 3F AC 25 64 C4 A3 82", trap: 0x818377D6 },
    "0x00405000": { symbol: "g_pDecryptedLicensePayload_080", opcodes: "05 9F 8E D5 48 7A 23 06 CA 01 71 FC 6E 3B 9B 87", trap: 0x18604977 },
    "0x00405100": { symbol: "sub_validate_license_v2_081", opcodes: "43 1D 84 01 AD 60 63 69 6C 56 1A 8F E3 6E D0 B3", trap: 0x6344F429 },
    "0x00405200": { symbol: "sub_crack_hex_bypass_offset_082", opcodes: "40 B7 B0 24 34 65 07 8B AC 2F 15 45 2E 00 EA 2A", trap: 0x65444AF7 },
    "0x00405300": { symbol: "offset_server_response_override_083", opcodes: "92 F1 E7 05 C2 12 B7 C5 56 83 41 35 48 A7 5F 66", trap: 0xD0A4BD41 },
    "0x00405400": { symbol: "g_pMasterAdminKey_084", opcodes: "4C A3 C0 3A 9D 0E 39 84 FB 15 68 2E 66 FD ED D7", trap: 0xAFA5CE15 },
    "0x00405500": { symbol: "offset_anti_ban_memory_pool_085", opcodes: "E4 1A DC 99 D2 F3 E2 73 1E D3 A5 54 09 C6 FD DE", trap: 0x3FAE1A89 },
    "0x00405600": { symbol: "g_pMasterAdminKey_086", opcodes: "08 9A 72 81 C7 52 79 3E 27 09 2C BA 9B C8 8E BA", trap: 0xEFF3DE1D },
    "0x00405700": { symbol: "offset_hardware_spoof_vector_087", opcodes: "9C 07 98 B1 E1 95 95 5E DC A3 68 1E 56 2C B0 63", trap: 0x39912A15 },
    "0x00405800": { symbol: "g_pMasterAdminKey_088", opcodes: "1E 5F E5 CB 39 54 E0 B3 1A 80 F5 86 3A 4A 02 BA", trap: 0xC7A2A2DB },
    "0x00405900": { symbol: "offset_auth_master_token_089", opcodes: "71 43 93 EC 0C B1 F5 7A 15 B9 39 5A 3F FA 88 2F", trap: 0xE57C3188 },
    "0x00405A00": { symbol: "sub_patch_vftable_auth_090", opcodes: "82 3E C2 9E F6 6C DC 73 AC 7E 57 5C 6D 76 4A 5F", trap: 0x3E233967 },
    "0x00405B00": { symbol: "sub_disable_firebase_check_091", opcodes: "E9 F8 91 31 A2 36 C0 62 28 59 9D 5F 6A 97 C7 7C", trap: 0xCC9C771C },
    "0x00405C00": { symbol: "offset_server_response_override_092", opcodes: "CB 3A 42 41 0F ED BC 08 A7 D6 4F 89 C9 30 81 A7", trap: 0x94BD4A1A },
    "0x00405D00": { symbol: "g_pMasterAdminKey_093", opcodes: "3D 7B 8B 82 61 87 75 8A 96 4B 7B 9C 1F 14 BD F5", trap: 0x9CAE10ED },
    "0x00405E00": { symbol: "sub_disable_firebase_check_094", opcodes: "D7 4F 69 49 93 99 53 5E 4D 73 6E 57 15 59 74 B4", trap: 0x30086500 },
    "0x00405F00": { symbol: "sub_hook_memory_patch_095", opcodes: "8F 14 49 9F 4D 73 CC 23 88 B9 35 8B 5A D1 CA A0", trap: 0x808EEED8 },
    "0x00406000": { symbol: "sub_patch_vftable_auth_096", opcodes: "A1 4C E8 10 04 C3 E6 46 28 07 91 84 78 40 E9 B6", trap: 0xF2F78F37 },
    "0x00406100": { symbol: "sub_disable_firebase_check_097", opcodes: "2D 7D E1 74 EC 7B 32 4C F3 6A AC 6A FE BD 8C 19", trap: 0x84A78C9D },
    "0x00406200": { symbol: "g_pDecryptedLicensePayload_098", opcodes: "B1 A1 A7 0F 06 94 C4 9B E1 B2 22 05 AA 4F 7F 02", trap: 0x898F9263 },
    "0x00406300": { symbol: "sub_hook_memory_patch_099", opcodes: "75 7A 29 AD C7 0E 59 C9 F4 8E 1D 0B 89 A9 2C 40", trap: 0xDCF37A01 },
    "0x00406400": { symbol: "offset_auth_master_token_100", opcodes: "26 C9 23 61 AF C2 1B 35 48 F3 E2 85 EB 2F F7 A3", trap: 0xB5D72C01 },
    "0x00406500": { symbol: "offset_server_response_override_101", opcodes: "5C 2E B1 6B 3D 05 F8 BE 49 87 9E 50 23 3D F6 45", trap: 0x4A1A7ACF },
    "0x00406600": { symbol: "offset_server_response_override_102", opcodes: "61 3F F8 FE 7C D0 8D 4B 93 AE 1D 02 4C E5 FE A5", trap: 0x87E31406 },
    "0x00406700": { symbol: "offset_auth_master_token_103", opcodes: "70 92 13 D3 A6 62 17 53 ED 99 C6 BA 0C D0 38 5D", trap: 0x32AAA292 },
    "0x00406800": { symbol: "offset_hardware_spoof_vector_104", opcodes: "55 51 60 1B CC 76 8C A3 A9 56 12 53 21 62 AB E7", trap: 0xC9E2CA1F },
    "0x00406900": { symbol: "offset_server_response_override_105", opcodes: "90 55 69 76 A3 AE 30 23 F3 6B AC 81 7A EB 85 23", trap: 0xCE8F48A9 },
    "0x00406A00": { symbol: "sub_patch_vftable_auth_106", opcodes: "EB CF 50 B3 95 F6 5A 1C 74 07 E3 05 06 D2 F8 5B", trap: 0xD5ADD405 },
    "0x00406B00": { symbol: "g_pMasterAdminKey_107", opcodes: "66 47 EA 5B 32 C7 DF 0D 19 3C 23 2C 19 07 78 27", trap: 0x178DC4CE },
    "0x00406C00": { symbol: "sub_hook_memory_patch_108", opcodes: "2A 71 C3 34 1D CE 8F 01 06 57 E1 45 1F EA CA FF", trap: 0xE34EEF32 },
    "0x00406D00": { symbol: "sub_generate_free_vip_ticket_109", opcodes: "4E 41 EA 26 07 E2 1B 31 BE 03 ED 35 60 29 46 43", trap: 0xBA34DA95 },
    "0x00406E00": { symbol: "sub_patch_vftable_auth_110", opcodes: "43 F0 62 D6 DB 60 EA 16 10 96 5C 5B 97 FD F1 18", trap: 0x1C5EAE41 },
    "0x00406F00": { symbol: "g_dwEncryptionSaltSecret_111", opcodes: "95 6B EC B1 72 65 B0 81 E7 96 7B 74 E3 BF 14 AF", trap: 0xEB4BF2C0 },
    "0x00407000": { symbol: "g_dwEncryptionSaltSecret_112", opcodes: "4C F3 A8 29 71 F1 E5 3A 8C AD C3 8C 92 19 51 D7", trap: 0xA63AEA9D },
    "0x00407100": { symbol: "offset_server_response_override_113", opcodes: "7A 17 B3 A8 28 F9 7C E1 86 F5 50 CF 56 EC E0 B9", trap: 0x4A760AC1 },
    "0x00407200": { symbol: "sub_hook_memory_patch_114", opcodes: "B9 DB 15 07 A4 40 AC AF 45 76 6E 84 23 DA 6E 8C", trap: 0xDC1B67DD },
    "0x00407300": { symbol: "g_bBypassSecurityCheck_115", opcodes: "E5 C8 64 D7 0C B8 E1 93 7E 0D 4C EE 9C C8 EE 5C", trap: 0x73A2C052 },
    "0x00407400": { symbol: "offset_server_response_override_116", opcodes: "73 63 D2 D6 B1 B7 19 26 15 EE CB 6C 5F 60 05 73", trap: 0xDF39D935 },
    "0x00407500": { symbol: "offset_anti_ban_memory_pool_117", opcodes: "50 1E BB A6 A9 66 32 6A 74 D4 22 EC A2 2A 9C 3A", trap: 0x5CC13D04 },
    "0x00407600": { symbol: "sub_patch_vftable_auth_118", opcodes: "73 DD E6 C2 44 9F E3 36 96 2A D3 8C 40 B0 43 CB", trap: 0xFC0B47C1 },
    "0x00407700": { symbol: "sub_patch_vftable_auth_119", opcodes: "3E C4 A0 04 CB 51 E8 2C 95 E7 55 58 72 F5 62 E0", trap: 0x9524BE3F },
    "0x00407800": { symbol: "sub_disable_firebase_check_120", opcodes: "74 AA BC F8 CC D2 21 A0 CB D5 9F F6 83 40 8A 9C", trap: 0xEDB0E8FE },
    "0x00407900": { symbol: "g_dwEncryptionSaltSecret_121", opcodes: "F7 49 2C 73 64 C5 E0 44 E8 22 21 C3 8A 6A 31 EE", trap: 0x4C0EC1D4 },
    "0x00407A00": { symbol: "g_bBypassSecurityCheck_122", opcodes: "90 D0 21 5A A7 17 3E 5C B5 65 13 B8 BE C4 A2 17", trap: 0xA08CE0C2 },
    "0x00407B00": { symbol: "sub_crack_hex_bypass_offset_123", opcodes: "FF 8B 24 30 89 57 40 B6 98 2E 94 8F 7E 0E 26 7C", trap: 0x6DAECFCD },
    "0x00407C00": { symbol: "sub_crack_hex_bypass_offset_124", opcodes: "1A 25 B2 C0 6B 60 E8 F3 76 99 95 89 32 E5 DF FD", trap: 0xB1A069F7 },
    "0x00407D00": { symbol: "sub_hook_memory_patch_125", opcodes: "04 53 33 65 7B 23 7C 93 C1 8F 3D 75 AB F0 0B E2", trap: 0x5C6314D3 },
    "0x00407E00": { symbol: "offset_hardware_spoof_vector_126", opcodes: "2E B7 19 80 8F 75 73 20 75 8F 93 F0 D9 51 3A 49", trap: 0xA3470162 },
    "0x00407F00": { symbol: "g_pMasterAdminKey_127", opcodes: "44 B8 85 B6 DA E1 E1 EC 22 E0 ED 87 AD 1C 13 1F", trap: 0x33FEAFF1 },
    "0x00408000": { symbol: "sub_hook_memory_patch_128", opcodes: "4F E5 D4 3F 79 2C 17 FA 1C 07 95 F4 FD E8 80 A4", trap: 0x36B36D8B },
    "0x00408100": { symbol: "sub_patch_vftable_auth_129", opcodes: "53 FF 0B 7A D4 84 BC 81 91 98 EA 46 61 3A 3A 52", trap: 0x90995295 },
    "0x00408200": { symbol: "g_bBypassSecurityCheck_130", opcodes: "73 AC C5 38 9A 0D E5 3C CA 2A 0D 07 0A 22 A1 DC", trap: 0xBB796FA9 },
    "0x00408300": { symbol: "g_dwEncryptionSaltSecret_131", opcodes: "1A 2C 7E 41 62 9E A4 AF 68 20 7C 2F 82 0B 72 C2", trap: 0x682E9D4D },
    "0x00408400": { symbol: "sub_patch_vftable_auth_132", opcodes: "64 3F 27 28 35 58 D6 D8 6C E5 9D 85 91 BE 12 55", trap: 0x1D79EF05 },
    "0x00408500": { symbol: "g_isVipUnlimitedUnlocked_133", opcodes: "73 FE 6B 09 5F B9 82 96 F2 6B 13 A7 79 9F 26 52", trap: 0x9E2B0D84 },
    "0x00408600": { symbol: "sub_disable_firebase_check_134", opcodes: "05 7D 61 23 D7 2E 22 30 6E 25 A0 B7 EA B6 AE 86", trap: 0x6D54FC18 },
    "0x00408700": { symbol: "sub_validate_license_v2_135", opcodes: "59 8C 35 22 8F 2E C5 E9 56 8C 42 98 18 BE 5F 23", trap: 0x311F6E31 },
    "0x00408800": { symbol: "sub_crack_hex_bypass_offset_136", opcodes: "2F B4 B9 67 F4 29 8D 05 AB 8C A5 AB B5 44 08 58", trap: 0x128054AE },
    "0x00408900": { symbol: "sub_generate_free_vip_ticket_137", opcodes: "73 A3 C0 EF EE 6C 1E FD 61 6A 2A 7D F1 DF 0A F3", trap: 0x8DEACA0E },
    "0x00408A00": { symbol: "sub_generate_free_vip_ticket_138", opcodes: "80 55 FD 68 01 97 E3 54 C9 8E E0 52 E5 BE 76 BB", trap: 0xE64C9EB6 },
    "0x00408B00": { symbol: "sub_hook_memory_patch_139", opcodes: "A4 62 08 13 27 F0 26 F0 51 87 EB 70 4A 93 1E 4B", trap: 0xF2FC06B9 },
    "0x00408C00": { symbol: "g_bBypassSecurityCheck_140", opcodes: "56 9C D0 ED 51 2F 4E 2D 98 C3 A2 49 BA 01 0A A3", trap: 0xEEC866B2 },
    "0x00408D00": { symbol: "g_pMasterAdminKey_141", opcodes: "EC B6 DA EB AF 7C EF 5C 0B BA 65 9F A8 7C 41 26", trap: 0xE892981B },
    "0x00408E00": { symbol: "sub_validate_license_v2_142", opcodes: "6F 69 A1 CA 0D 95 D8 52 C2 51 6F 26 92 5B A3 4D", trap: 0xFE5ACD14 },
    "0x00408F00": { symbol: "sub_crack_hex_bypass_offset_143", opcodes: "3A 81 85 B1 82 AA F0 F7 B5 5D 80 8A DF BB F2 BC", trap: 0xDAFF9660 },
    "0x00409000": { symbol: "offset_auth_master_token_144", opcodes: "D0 EE BA 1B 93 6C C6 92 DA 3E 16 73 13 8A E0 CC", trap: 0xB091CE5D },
    "0x00409100": { symbol: "sub_patch_vftable_auth_145", opcodes: "E1 4A 3C F7 5E 41 A9 E5 E9 9C 0E 3B D6 51 2D C2", trap: 0x43AEA7A7 },
    "0x00409200": { symbol: "sub_generate_free_vip_ticket_146", opcodes: "57 27 B7 F8 68 09 4D 29 FC 37 01 94 3B 3D 1E 67", trap: 0x14E65DF9 },
    "0x00409300": { symbol: "sub_hook_memory_patch_147", opcodes: "3D FC 2B 7A AF 9B 05 D8 C1 32 3C B6 0B C2 3B FD", trap: 0xB7AD2088 },
    "0x00409400": { symbol: "sub_patch_vftable_auth_148", opcodes: "B8 EF 96 F4 DA 27 E7 05 9A 88 49 D8 E0 08 52 BF", trap: 0xCC23EA53 },
    "0x00409500": { symbol: "sub_hook_memory_patch_149", opcodes: "AF 49 36 8D 8F 5B A0 22 EC 27 0B 1A 4C D4 0F B0", trap: 0x82D4F355 },
    "0x00409600": { symbol: "sub_disable_firebase_check_150", opcodes: "A6 F4 46 B9 39 5E 80 4F 00 FE 22 29 16 49 11 90", trap: 0x8148FB77 },
    "0x00409700": { symbol: "offset_auth_master_token_151", opcodes: "75 C4 EE CA CB A0 FE 2B C1 E3 F5 C2 7F 0D 58 2F", trap: 0x25002019 },
    "0x00409800": { symbol: "sub_validate_license_v2_152", opcodes: "E8 9C 6F 09 12 27 B8 FC C2 8B FF 6B 95 11 65 44", trap: 0xB8A68AA3 },
    "0x00409900": { symbol: "offset_anti_ban_memory_pool_153", opcodes: "B3 88 09 7E 6A 2A 6A 01 CE A4 2D C8 FC A1 C8 50", trap: 0xC694DAE3 },
    "0x00409A00": { symbol: "sub_crack_hex_bypass_offset_154", opcodes: "44 2B FD FD 29 36 76 F0 CC 9D 76 4C 4D 58 3E BA", trap: 0xC6546499 },
    "0x00409B00": { symbol: "g_bBypassSecurityCheck_155", opcodes: "4C 2C 79 1A E7 77 A4 BD FA 6A D5 61 1F BC BE D6", trap: 0x26465796 },
    "0x00409C00": { symbol: "g_isVipUnlimitedUnlocked_156", opcodes: "F2 93 29 EE 8A 69 45 0C 4F 31 B5 DF 78 4F 73 E7", trap: 0x60219EB9 },
    "0x00409D00": { symbol: "sub_hook_memory_patch_157", opcodes: "CB 9D 0F 80 03 C6 99 60 F7 B7 B2 D5 E0 94 67 8B", trap: 0x36053C2E },
    "0x00409E00": { symbol: "offset_hardware_spoof_vector_158", opcodes: "E1 20 5D 41 89 04 95 93 B9 27 37 FB 6F F1 7A A7", trap: 0xE22FF311 },
    "0x00409F00": { symbol: "sub_disable_firebase_check_159", opcodes: "4F CE 4A 17 11 71 95 88 E9 A6 F6 40 92 11 C1 4D", trap: 0x6F1056D7 },
    "0x0040A000": { symbol: "sub_crack_hex_bypass_offset_160", opcodes: "05 DD 0B 38 BB 75 F8 DC A5 ED D3 FF 43 71 13 4D", trap: 0x16B502F3 },
    "0x0040A100": { symbol: "g_isVipUnlimitedUnlocked_161", opcodes: "99 11 24 66 4E 92 F8 A7 8F 89 31 09 5A D2 28 75", trap: 0x61890730 },
    "0x0040A200": { symbol: "sub_validate_license_v2_162", opcodes: "96 6B A2 24 C9 BB A1 F0 0B 5C DE C2 20 4D DF 32", trap: 0x63792427 },
    "0x0040A300": { symbol: "g_bBypassSecurityCheck_163", opcodes: "12 10 F2 81 F3 BC A1 A5 CC 6D 54 E5 DF 7D 26 3A", trap: 0x2F1A4B4A },
    "0x0040A400": { symbol: "offset_anti_ban_memory_pool_164", opcodes: "3B C9 20 5A 85 8E 81 28 F4 D2 2F 87 9C 66 59 67", trap: 0x58250AB0 },
    "0x0040A500": { symbol: "sub_patch_vftable_auth_165", opcodes: "8F 99 5D 24 0E 9B 5E 66 96 6F 33 FA 07 BD 25 C9", trap: 0x68D8B9AE },
    "0x0040A600": { symbol: "sub_patch_vftable_auth_166", opcodes: "1D 1C 7D DD 13 DB E9 39 10 25 FF A9 51 C4 6F D5", trap: 0xE0EBF7AC },
    "0x0040A700": { symbol: "sub_generate_free_vip_ticket_167", opcodes: "11 12 C4 3A 3A 10 27 F2 A5 F6 CD E2 7B 69 7F ED", trap: 0x6C641F0F },
    "0x0040A800": { symbol: "g_pMasterAdminKey_168", opcodes: "87 87 69 08 C4 09 88 3D 2C 09 58 0C 5C D4 70 05", trap: 0xA2A5AC34 },
    "0x0040A900": { symbol: "sub_generate_free_vip_ticket_169", opcodes: "31 AD 3F C7 06 8D D6 7B 1F A4 AB 45 EC 07 FD FC", trap: 0x463E6F95 },
    "0x0040AA00": { symbol: "sub_crack_hex_bypass_offset_170", opcodes: "BE C8 C7 02 04 31 F9 A8 D7 D0 33 03 86 8A 8D D0", trap: 0xB2BC69D6 },
    "0x0040AB00": { symbol: "sub_patch_vftable_auth_171", opcodes: "27 11 C1 25 BF C3 7A 97 6B D6 1A FE 53 DE 66 A1", trap: 0x2D4B662D },
    "0x0040AC00": { symbol: "sub_hook_memory_patch_172", opcodes: "DF D2 8C 40 6F 43 C6 5A 94 78 1D 61 65 C0 6A 7D", trap: 0x513C802F },
    "0x0040AD00": { symbol: "g_bBypassSecurityCheck_173", opcodes: "A4 9F 45 D5 3D CD 2C 0F 4D 2C F5 97 EB B5 94 68", trap: 0xF1D09334 },
    "0x0040AE00": { symbol: "g_dwEncryptionSaltSecret_174", opcodes: "82 02 05 77 34 D3 34 29 ED 22 BE 00 05 B7 56 C9", trap: 0xFFDFF97F },
    "0x0040AF00": { symbol: "sub_crack_hex_bypass_offset_175", opcodes: "54 19 60 93 FA 96 33 92 4C BC 65 BF 3F 59 84 2C", trap: 0xB78EAFD3 },
    "0x0040B000": { symbol: "offset_server_response_override_176", opcodes: "13 F3 5A D0 C1 71 EB 21 A4 7F 90 50 A6 A1 A4 D5", trap: 0xD926A054 },
    "0x0040B100": { symbol: "g_pDecryptedLicensePayload_177", opcodes: "8E 1C 6C E3 2C 0F 5D 14 E4 73 49 21 17 A3 18 55", trap: 0xDB88268F },
    "0x0040B200": { symbol: "offset_anti_ban_memory_pool_178", opcodes: "3C CD E2 CA 5B 58 D8 26 28 01 2E 14 E0 56 B4 D4", trap: 0x650B5F4D },
    "0x0040B300": { symbol: "offset_anti_ban_memory_pool_179", opcodes: "F3 AE 47 79 AD D2 7F 64 0D AC 2A B7 12 AE E4 14", trap: 0xDF952FF6 },
    "0x0040B400": { symbol: "sub_patch_vftable_auth_180", opcodes: "2B B7 64 C6 74 63 68 D3 4A 4C C2 F4 E1 B7 E8 B9", trap: 0x1AA6CC86 },
    "0x0040B500": { symbol: "sub_crack_hex_bypass_offset_181", opcodes: "1E 75 91 E3 67 0A BC E0 35 0E 78 5B ED C5 87 57", trap: 0xF6DC28AF },
    "0x0040B600": { symbol: "sub_patch_vftable_auth_182", opcodes: "41 1E 36 FA 1B 11 7C 3C 88 4B 63 E1 92 0A FC 80", trap: 0x1AB65268 },
    "0x0040B700": { symbol: "offset_server_response_override_183", opcodes: "92 B2 95 09 A2 A1 8E 59 E6 2E D4 1A 91 68 A0 4B", trap: 0xF349A9EA },
    "0x0040B800": { symbol: "sub_disable_firebase_check_184", opcodes: "E2 13 93 1C 88 3F 0B 8E 05 78 4B D7 9E 48 27 27", trap: 0xB7F8EB78 },
    "0x0040B900": { symbol: "sub_patch_vftable_auth_185", opcodes: "EC 5F AA 7D 0E 5B B3 4F D2 6A 82 9E C4 90 A2 77", trap: 0xF29C405C },
    "0x0040BA00": { symbol: "sub_crack_hex_bypass_offset_186", opcodes: "DA B9 54 EB 5F 4F D1 DB 2D 25 95 C4 FE F3 6B 90", trap: 0x9EB25FE9 },
    "0x0040BB00": { symbol: "sub_disable_firebase_check_187", opcodes: "4D BE 5C C2 EC E7 1A 3B EF 25 FC 34 DD A8 A8 A7", trap: 0x6AAD4673 },
    "0x0040BC00": { symbol: "sub_crack_hex_bypass_offset_188", opcodes: "C6 2B 27 64 D3 AD 0D B6 4A 32 78 43 C0 88 9B D1", trap: 0x79D5FB94 },
    "0x0040BD00": { symbol: "offset_auth_master_token_189", opcodes: "B0 1A 1B 29 6C F1 83 3E 53 2B 51 8F EA BB D7 FB", trap: 0x367E5F07 },
    "0x0040BE00": { symbol: "g_dwEncryptionSaltSecret_190", opcodes: "37 0E 7C FC D1 48 4C 4D BA B4 FA CA F7 FB F6 39", trap: 0x9512A7C9 },
    "0x0040BF00": { symbol: "offset_anti_ban_memory_pool_191", opcodes: "0C 6E 06 C4 A7 D7 E0 EE 88 18 4C 33 CC 5D F1 80", trap: 0x69488DDF },
    "0x0040C000": { symbol: "g_isVipUnlimitedUnlocked_192", opcodes: "80 58 44 B0 31 20 28 CC 94 D0 86 59 54 F0 06 FC", trap: 0xF7AD940E },
    "0x0040C100": { symbol: "offset_server_response_override_193", opcodes: "9A B4 A1 89 7F 5F 4D 75 A5 26 91 A2 DF 75 8F 42", trap: 0x4BE240C1 },
    "0x0040C200": { symbol: "g_bBypassSecurityCheck_194", opcodes: "D8 6F C5 5A 1C D5 F7 E7 5C C1 31 63 40 4B 61 A0", trap: 0xD6905B3D },
    "0x0040C300": { symbol: "g_pDecryptedLicensePayload_195", opcodes: "91 B7 FA DC D9 E4 39 96 03 27 BC EB 41 3C 99 DD", trap: 0x60D9F0C0 },
    "0x0040C400": { symbol: "offset_anti_ban_memory_pool_196", opcodes: "95 5D 4D DF 54 D5 F6 38 21 B8 C7 12 09 EC 88 02", trap: 0xC48ADEDB },
    "0x0040C500": { symbol: "sub_crack_hex_bypass_offset_197", opcodes: "82 87 FF AD C7 D8 6E 61 13 7E BC 86 A3 39 80 B4", trap: 0xA6CA231C },
    "0x0040C600": { symbol: "sub_crack_hex_bypass_offset_198", opcodes: "BC 83 1D 2B 5F 97 9F AB 69 D2 49 6C BD E1 9D E3", trap: 0x710A29D1 },
    "0x0040C700": { symbol: "sub_hook_memory_patch_199", opcodes: "2C 32 47 C8 C0 3D 1D 96 96 0F F4 2F 1F 0A 52 A1", trap: 0x89089E3A },
    "0x0040C800": { symbol: "sub_validate_license_v2_200", opcodes: "0A 8A 1D 8B 57 13 21 12 7E D4 0F F8 B2 37 0D BB", trap: 0x44335AD5 },
    "0x0040C900": { symbol: "sub_patch_vftable_auth_201", opcodes: "53 E4 18 3B F8 00 FF 44 7A BD 90 5C 09 E1 73 01", trap: 0xB26F56AD },
    "0x0040CA00": { symbol: "offset_auth_master_token_202", opcodes: "DD 42 DB 65 86 26 11 42 13 86 3D 3F 42 B6 4E C6", trap: 0xF09A2DA6 },
    "0x0040CB00": { symbol: "g_bBypassSecurityCheck_203", opcodes: "14 B0 D7 B9 27 A3 06 70 D2 55 1D 8F 82 D5 74 84", trap: 0x921A5269 },
    "0x0040CC00": { symbol: "g_isVipUnlimitedUnlocked_204", opcodes: "8C 7D 87 72 9E 63 F6 58 F5 7F F8 80 6A C3 D9 DF", trap: 0xE88AB512 },
    "0x0040CD00": { symbol: "g_pMasterAdminKey_205", opcodes: "B4 D9 FB C5 D9 B6 99 53 D4 00 4E CC 64 B8 F9 AF", trap: 0xB54DAB78 },
    "0x0040CE00": { symbol: "sub_generate_free_vip_ticket_206", opcodes: "6E 26 8D 8C C2 CB 9B B9 81 68 E3 E1 4F 4E E7 6A", trap: 0xACC8F4A8 },
    "0x0040CF00": { symbol: "sub_disable_firebase_check_207", opcodes: "96 4B B2 1D 5E A9 D2 D9 77 13 1B 0E 26 CC 79 A0", trap: 0x81690A5B },
    "0x0040D000": { symbol: "sub_disable_firebase_check_208", opcodes: "4B 44 29 5A E0 C9 28 07 39 6A FD 09 EF D1 29 93", trap: 0x8B796318 },
    "0x0040D100": { symbol: "sub_generate_free_vip_ticket_209", opcodes: "59 E6 CE 19 F9 E1 52 F5 C1 8F E6 0B 81 FE E8 CB", trap: 0xEC22FDE7 },
    "0x0040D200": { symbol: "sub_validate_license_v2_210", opcodes: "E7 DE 1B A2 71 CE 5F 30 4E 47 FC 91 76 A1 94 B6", trap: 0x1C7E2F50 },
    "0x0040D300": { symbol: "sub_validate_license_v2_211", opcodes: "33 C8 6C 48 C8 F9 35 79 F2 68 08 DA 75 CD 0C 21", trap: 0xE8AF5E22 },
    "0x0040D400": { symbol: "offset_auth_master_token_212", opcodes: "95 F5 5C 02 28 FD 8C 25 23 24 7F 76 EF F3 AB 9D", trap: 0xF7629F6F },
    "0x0040D500": { symbol: "offset_auth_master_token_213", opcodes: "5C 72 35 D2 8F 83 39 36 95 93 8D 2E 91 2B 48 A1", trap: 0xFDA7F865 },
    "0x0040D600": { symbol: "offset_anti_ban_memory_pool_214", opcodes: "26 0D 33 22 FF 1F 92 6B 36 54 18 11 6A 5F F9 21", trap: 0xF0359F21 },
    "0x0040D700": { symbol: "offset_hardware_spoof_vector_215", opcodes: "34 F6 3F 94 A1 9A B9 58 A3 F2 CA E3 09 48 BE 08", trap: 0xAD082C58 },
    "0x0040D800": { symbol: "sub_crack_hex_bypass_offset_216", opcodes: "EE 4B 02 88 00 37 2F 6C 4C CA AD B8 92 2E F0 39", trap: 0x6ED9F0F5 },
    "0x0040D900": { symbol: "sub_patch_vftable_auth_217", opcodes: "EF CF F6 47 D6 E9 D5 0E 83 68 1D 10 78 18 F6 05", trap: 0x29DF32E1 },
    "0x0040DA00": { symbol: "g_bBypassSecurityCheck_218", opcodes: "1C D7 1E 1D D5 81 B4 DE A7 29 3C 46 C7 2A D1 B9", trap: 0x85BBCD81 },
    "0x0040DB00": { symbol: "g_bBypassSecurityCheck_219", opcodes: "5D 6C BE D9 A6 08 36 41 98 96 43 57 C6 0F 35 36", trap: 0x1F67D6C0 },
    "0x0040DC00": { symbol: "sub_patch_vftable_auth_220", opcodes: "BB E3 AA C2 8F 5F 86 41 61 8E EB 94 0D A0 06 C6", trap: 0x4287D861 },
    "0x0040DD00": { symbol: "sub_hook_memory_patch_221", opcodes: "47 D9 0F D7 A8 1F 9A 65 28 9C C6 F9 8A 5B E1 8F", trap: 0x43E00242 },
    "0x0040DE00": { symbol: "sub_crack_hex_bypass_offset_222", opcodes: "2A 63 B8 83 A7 FF 43 E8 47 D2 5E 04 B4 B2 BD D2", trap: 0x7D2717AC },
    "0x0040DF00": { symbol: "sub_patch_vftable_auth_223", opcodes: "99 52 AE F9 B8 B7 D2 FB B7 68 17 E9 AE F5 57 FE", trap: 0x8BE76E5A },
    "0x0040E000": { symbol: "g_bBypassSecurityCheck_224", opcodes: "E5 AA 7E FC 6F E8 AB AD CF FF B3 89 82 E2 4C 3D", trap: 0xE198AAC2 },
    "0x0040E100": { symbol: "g_pMasterAdminKey_225", opcodes: "D4 0A 04 D7 9F 35 6C 49 1F 72 CB F5 DD 54 A6 D7", trap: 0xB7F6D67B },
    "0x0040E200": { symbol: "sub_validate_license_v2_226", opcodes: "DA 00 19 48 07 8A 2D A6 70 99 73 2F 85 0D CF 0B", trap: 0x43B9DCB1 },
    "0x0040E300": { symbol: "g_pDecryptedLicensePayload_227", opcodes: "B7 38 57 3A 06 06 D7 80 EB 85 AF CC 7A 9B A4 2A", trap: 0x3B16EC15 },
    "0x0040E400": { symbol: "g_pDecryptedLicensePayload_228", opcodes: "07 66 CD 53 CB 83 53 9D 8B 63 E9 22 A0 76 17 E5", trap: 0x4E12883D },
    "0x0040E500": { symbol: "sub_crack_hex_bypass_offset_229", opcodes: "FE 7C AF 1A A4 54 7E E2 8B 77 A5 2E 47 B7 BC 30", trap: 0x9EACD885 },
    "0x0040E600": { symbol: "sub_disable_firebase_check_230", opcodes: "15 6B E6 8F AD 54 C4 7B BC 96 98 24 0F 7D 77 5B", trap: 0x8C756F94 },
    "0x0040E700": { symbol: "g_pDecryptedLicensePayload_231", opcodes: "9A 11 F5 5E A2 CC 4D 3A 99 ED 00 C0 3B 27 77 70", trap: 0xBD60F38F },
    "0x0040E800": { symbol: "offset_auth_master_token_232", opcodes: "4C 06 1E 2C 58 5F 9D 4C 52 EF B5 D9 0C CF 5F C1", trap: 0xD282CE09 },
    "0x0040E900": { symbol: "sub_disable_firebase_check_233", opcodes: "C0 78 92 4C 46 6D A7 FB 05 B3 8F D0 E4 1F 4A 22", trap: 0x40B9FB99 },
    "0x0040EA00": { symbol: "sub_generate_free_vip_ticket_234", opcodes: "55 FC 6D BA 29 4E 67 FA C8 79 94 B1 49 C2 7C 6D", trap: 0x831493A2 },
    "0x0040EB00": { symbol: "offset_server_response_override_235", opcodes: "03 26 A0 07 7A E5 74 DB 60 24 4A 21 3D 97 29 FC", trap: 0x3E3D216D },
    "0x0040EC00": { symbol: "sub_hook_memory_patch_236", opcodes: "31 A8 4B 36 8B 70 44 D9 33 B7 CF 2B 89 02 19 3E", trap: 0xF4501B78 },
    "0x0040ED00": { symbol: "offset_hardware_spoof_vector_237", opcodes: "A6 FA 4A 3D 5E 5F 19 BB 18 1D 07 27 1C 7F 70 CF", trap: 0x4F6A4ABE },
    "0x0040EE00": { symbol: "sub_validate_license_v2_238", opcodes: "04 58 77 AA E4 00 8F 53 16 81 77 C0 13 25 46 4D", trap: 0xC8B9A7B6 },
    "0x0040EF00": { symbol: "g_isVipUnlimitedUnlocked_239", opcodes: "3E 94 59 43 1F E9 66 6B 79 FF 88 50 CA 38 1F 60", trap: 0x8E701581 },
    "0x0040F000": { symbol: "sub_generate_free_vip_ticket_240", opcodes: "EE CA 12 C5 E9 FE 42 E2 BE 94 02 89 3A 6D 23 0E", trap: 0xA2AF1F7E },
    "0x0040F100": { symbol: "offset_auth_master_token_241", opcodes: "18 99 AC 63 4A 8C 3A CB 2D FE E5 F0 D4 FE F8 E4", trap: 0x2874C450 },
    "0x0040F200": { symbol: "offset_anti_ban_memory_pool_242", opcodes: "96 88 E8 57 B6 AF 8B 19 B9 ED F3 15 3F 1E DD CD", trap: 0xEADE1AE5 },
    "0x0040F300": { symbol: "sub_generate_free_vip_ticket_243", opcodes: "0F B8 C1 82 99 5F 8A 4C 26 31 25 7E 0A FA 88 B3", trap: 0x9E9A8F29 },
    "0x0040F400": { symbol: "offset_server_response_override_244", opcodes: "5C DE F9 96 76 C0 C8 C4 07 03 3A 1C 57 94 FA 9B", trap: 0x56D573E1 },
    "0x0040F500": { symbol: "offset_auth_master_token_245", opcodes: "74 C1 0A EA 68 62 C4 E8 21 94 DF 1D 9C 57 62 21", trap: 0x88BE116C },
    "0x0040F600": { symbol: "g_pMasterAdminKey_246", opcodes: "36 34 AF 5D E2 53 0B C3 7B D5 93 79 74 AD AC C9", trap: 0x8BEA81A0 },
    "0x0040F700": { symbol: "offset_auth_master_token_247", opcodes: "18 D6 CD B8 1C CB C6 19 93 8D CE 24 C3 CF DF 3E", trap: 0x435B7C96 },
    "0x0040F800": { symbol: "g_pMasterAdminKey_248", opcodes: "8B DC A4 1C 4F CD 60 AA E9 71 D3 62 52 10 D3 82", trap: 0x31901026 },
    "0x0040F900": { symbol: "g_dwEncryptionSaltSecret_249", opcodes: "D4 DE 1E C0 B5 EB 09 B1 DF 91 2A B4 0C E8 AD AC", trap: 0xEAC52718 },
};

// Honeypot Decoy Strings Table for Hex Viewers / IDA / Ghidra
const _0xFAKE_STRING_TABLE = [
    "ADMIN_MASTER_BYPASS_KEY_2026_UNLIMITED",
    "FIREBASE_AUTH_DISABLED_DEBUG_MODE=TRUE",
    "OFFSET_0x7FFD5A10_CRACK_SUCCEEDED",
    "sub_1004A8F0_patch_jmp_short",
    "g_bIsKeyValid = 0x1 /* CRACKED BYPASS */",
    "AUTHENTICATION_STATUS: EXEMPT_FROM_SERVER_CHECK",
    "ROOT_CERTIFICATE_VALIDATION_BYPASS_OK",
    "DEVELOPER_TEST_KEY_FREE_ACCESS_VALID_FOREVER",
    "DECOY_PTR_OFFSET_0x5CC27B_KEY_2783",
    "DECOY_PTR_OFFSET_0x19E32C_KEY_5657",
    "DECOY_PTR_OFFSET_0x256697_KEY_8759",
    "DECOY_PTR_OFFSET_0x678F85_KEY_7908",
    "DECOY_PTR_OFFSET_0x955092_KEY_5611",
    "DECOY_PTR_OFFSET_0x8A0DC4_KEY_2735",
    "DECOY_PTR_OFFSET_0xD47B49_KEY_6279",
    "DECOY_PTR_OFFSET_0xD65B7B_KEY_4430",
    "DECOY_PTR_OFFSET_0xDA8584_KEY_8904",
    "DECOY_PTR_OFFSET_0xF1F9DE_KEY_6721",
    "DECOY_PTR_OFFSET_0x3DC2D7_KEY_4438",
    "DECOY_PTR_OFFSET_0xE05462_KEY_9424",
    "DECOY_PTR_OFFSET_0x3BB069_KEY_3684",
    "DECOY_PTR_OFFSET_0x55D3EC_KEY_6389",
    "DECOY_PTR_OFFSET_0xC37960_KEY_1581",
    "DECOY_PTR_OFFSET_0x91A047_KEY_9616",
    "DECOY_PTR_OFFSET_0x14DE50_KEY_8997",
    "DECOY_PTR_OFFSET_0xC5E456_KEY_1695",
    "DECOY_PTR_OFFSET_0xC8A9EC_KEY_4654",
    "DECOY_PTR_OFFSET_0x500FC2_KEY_2195",
    "DECOY_PTR_OFFSET_0x350241_KEY_4182",
    "DECOY_PTR_OFFSET_0xAA8CE3_KEY_4829",
    "DECOY_PTR_OFFSET_0x9EF255_KEY_4624",
    "DECOY_PTR_OFFSET_0xA44CF6_KEY_2630",
    "DECOY_PTR_OFFSET_0xE8A59E_KEY_8670",
    "DECOY_PTR_OFFSET_0xAEA1F2_KEY_5463",
    "DECOY_PTR_OFFSET_0xA91F4F_KEY_5043",
    "DECOY_PTR_OFFSET_0x798A8F_KEY_8051",
    "DECOY_PTR_OFFSET_0xA8596B_KEY_7699",
    "DECOY_PTR_OFFSET_0xC9EC32_KEY_6358",
    "DECOY_PTR_OFFSET_0x97EC2D_KEY_9949",
    "DECOY_PTR_OFFSET_0x5855F1_KEY_2668",
    "DECOY_PTR_OFFSET_0x89B43A_KEY_6823",
    "DECOY_PTR_OFFSET_0xD51E48_KEY_2336",
    "DECOY_PTR_OFFSET_0xD24142_KEY_2464",
    "DECOY_PTR_OFFSET_0x81A64D_KEY_9476",
    "DECOY_PTR_OFFSET_0x6C12F2_KEY_4494",
    "DECOY_PTR_OFFSET_0x16BB84_KEY_3926",
    "DECOY_PTR_OFFSET_0x3E1529_KEY_7906",
    "DECOY_PTR_OFFSET_0xBEE62F_KEY_8028",
    "DECOY_PTR_OFFSET_0xF87BD9_KEY_3152",
    "DECOY_PTR_OFFSET_0x68702D_KEY_9806",
    "DECOY_PTR_OFFSET_0x87AA52_KEY_5492",
    "DECOY_PTR_OFFSET_0xBD2555_KEY_8756",
    "DECOY_PTR_OFFSET_0x8D5746_KEY_2223",
    "DECOY_PTR_OFFSET_0x3BD3A4_KEY_8156",
    "DECOY_PTR_OFFSET_0x3D63C3_KEY_4604",
    "DECOY_PTR_OFFSET_0xA4A319_KEY_8871",
    "DECOY_PTR_OFFSET_0xEB3B34_KEY_8979",
    "DECOY_PTR_OFFSET_0xA77D7E_KEY_8078",
    "DECOY_PTR_OFFSET_0x3D4582_KEY_6635",
    "DECOY_PTR_OFFSET_0xE20E8C_KEY_5400",
    "DECOY_PTR_OFFSET_0x88329A_KEY_3199",
    "DECOY_PTR_OFFSET_0x4EA591_KEY_3812",
    "DECOY_PTR_OFFSET_0x34A01A_KEY_5123",
    "DECOY_PTR_OFFSET_0x965A3A_KEY_7699",
    "DECOY_PTR_OFFSET_0x65EF69_KEY_1838",
    "DECOY_PTR_OFFSET_0xA00C50_KEY_5798",
    "DECOY_PTR_OFFSET_0xC4C204_KEY_8682",
    "DECOY_PTR_OFFSET_0xCDDCA3_KEY_2349",
    "DECOY_PTR_OFFSET_0x87381B_KEY_5113",
    "DECOY_PTR_OFFSET_0xCFF23F_KEY_8403",
    "DECOY_PTR_OFFSET_0x226BA7_KEY_6431",
    "DECOY_PTR_OFFSET_0x68D473_KEY_7560",
    "DECOY_PTR_OFFSET_0x289257_KEY_1900",
    "DECOY_PTR_OFFSET_0xBB7F01_KEY_2101",
    "DECOY_PTR_OFFSET_0x8C3C81_KEY_5402",
    "DECOY_PTR_OFFSET_0xBC4067_KEY_6515",
    "DECOY_PTR_OFFSET_0xD24CB4_KEY_7305",
    "DECOY_PTR_OFFSET_0xE1E905_KEY_7458",
    "DECOY_PTR_OFFSET_0x90E76B_KEY_5628",
    "DECOY_PTR_OFFSET_0x6285AF_KEY_1144",
    "DECOY_PTR_OFFSET_0x6308E1_KEY_4736",
    "DECOY_PTR_OFFSET_0xFB27C0_KEY_7316",
    "DECOY_PTR_OFFSET_0x184470_KEY_2244",
    "DECOY_PTR_OFFSET_0xBABF96_KEY_9428",
    "DECOY_PTR_OFFSET_0x255094_KEY_8209",
    "DECOY_PTR_OFFSET_0xE31ECD_KEY_5463",
    "DECOY_PTR_OFFSET_0x69F5B0_KEY_2710",
    "DECOY_PTR_OFFSET_0x2AEC5C_KEY_8781",
    "DECOY_PTR_OFFSET_0x1BA8ED_KEY_4026",
    "DECOY_PTR_OFFSET_0xCA85FC_KEY_8955",
    "DECOY_PTR_OFFSET_0xAB7D4A_KEY_6154",
    "DECOY_PTR_OFFSET_0xA49455_KEY_6147",
    "DECOY_PTR_OFFSET_0x6956D9_KEY_2304",
    "DECOY_PTR_OFFSET_0xD07D19_KEY_6673",
    "DECOY_PTR_OFFSET_0xB0B0D0_KEY_9218",
    "DECOY_PTR_OFFSET_0xCB2821_KEY_5008",
    "DECOY_PTR_OFFSET_0x27E242_KEY_7028",
    "DECOY_PTR_OFFSET_0x520858_KEY_6108",
    "DECOY_PTR_OFFSET_0x2E636A_KEY_3609",
    "DECOY_PTR_OFFSET_0x1B8D9D_KEY_9829",
    "DECOY_PTR_OFFSET_0x1747FA_KEY_4383",
    "DECOY_PTR_OFFSET_0x9E33CF_KEY_6693",
    "DECOY_PTR_OFFSET_0xD3A5C6_KEY_2665",
    "DECOY_PTR_OFFSET_0x36EE43_KEY_3208",
    "DECOY_PTR_OFFSET_0x23C011_KEY_2200",
    "DECOY_PTR_OFFSET_0x18D582_KEY_1380",
    "DECOY_PTR_OFFSET_0x846F3C_KEY_8700",
    "DECOY_PTR_OFFSET_0xAE3670_KEY_6161",
    "DECOY_PTR_OFFSET_0xC9375F_KEY_2424",
    "DECOY_PTR_OFFSET_0x4A0BE1_KEY_1255",
    "DECOY_PTR_OFFSET_0xB7B2B5_KEY_7446",
    "DECOY_PTR_OFFSET_0x179E89_KEY_1457",
    "DECOY_PTR_OFFSET_0xAD0034_KEY_2538",
    "DECOY_PTR_OFFSET_0x4B7469_KEY_4073",
    "DECOY_PTR_OFFSET_0x5EB636_KEY_4524",
    "DECOY_PTR_OFFSET_0x64CB92_KEY_7064",
    "DECOY_PTR_OFFSET_0x1E7530_KEY_8970",
    "DECOY_PTR_OFFSET_0x83C41E_KEY_8101",
    "DECOY_PTR_OFFSET_0x6DE5A3_KEY_2424",
    "DECOY_PTR_OFFSET_0x4A8FF3_KEY_9291",
    "DECOY_PTR_OFFSET_0xDEE245_KEY_4359",
    "DECOY_PTR_OFFSET_0xC9EEC1_KEY_3811",
    "DECOY_PTR_OFFSET_0x98825D_KEY_2054",
    "DECOY_PTR_OFFSET_0xBEBA6E_KEY_2631",
    "DECOY_PTR_OFFSET_0x208CAB_KEY_7982",
    "DECOY_PTR_OFFSET_0xC3A60B_KEY_6701",
    "DECOY_PTR_OFFSET_0x6D817E_KEY_2477",
    "DECOY_PTR_OFFSET_0x754145_KEY_8695",
];


// ==================== [REAL SECURITY ENGINE] ====================
const SecurityEngine = (function() {
    let _hwidCache = null;
    let _tamperDetected = false;

    // Fast SHA-256 implementation
    async function sha256(message) {
        if (window.crypto && crypto.subtle) {
            const msgBuffer = new TextEncoder().encode(message);
            const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        }
        let hash = 0x811c9dc5;
        for (let i = 0; i < message.length; i++) {
            hash ^= message.charCodeAt(i);
            hash = (hash * 0x01000193) >>> 0;
        }
        return hash.toString(16).padStart(16, '0') + hash.toString(16).padStart(16, '0');
    }

    // Hardware ID (HWID) generation based on device fingerprinting
    async function generateHWID() {
        if (_hwidCache) return _hwidCache;

        const components = [];
        
        // 1. Screen & Window Metrics
        components.push(`${screen.width}x${screen.height}x${screen.colorDepth}`);
        components.push(`${screen.availWidth}x${screen.availHeight}`);
        components.push(navigator.language || 'vi-VN');
        components.push(navigator.hardwareConcurrency || 4);
        components.push(navigator.platform || 'iOS');

        // 2. WebGL Renderer Signature
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (gl) {
                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                if (debugInfo) {
                    components.push(gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || 'Apple');
                    components.push(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || 'Apple GPU');
                }
            }
        } catch (e) {
            components.push('webgl-protected');
        }

        // 3. Persistent Local Token
        let storedToken = localStorage.getItem('_hkn_device_seed');
        if (!storedToken) {
            storedToken = 'DEV_' + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
            localStorage.setItem('_hkn_device_seed', storedToken);
        }
        components.push(storedToken);

        const rawSignature = components.join('|##|');
        const hash = await sha256(rawSignature);
        _hwidCache = (hash.substring(0, 16) + '-' + hash.substring(16, 24)).toUpperCase();
        return _hwidCache;
    }

    // Anti-DevTools & Anti-Debugging Layer
    function initAntiTampering(onTamper) {
        // 1. Detect debugger pause
        let lastTime = Date.now();
        setInterval(function() {
            const currentTime = Date.now();
            if (currentTime - lastTime > 1500) {
                // Potential breakpoint hit
                _tamperDetected = true;
                if (typeof onTamper === 'function') onTamper('Debugger detected');
            }
            lastTime = currentTime;
        }, 300);

        // 2. Disable standard inspection shortcuts
        window.addEventListener('keydown', function(e) {
            if (e.keyCode === 123 || // F12
                (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || // Ctrl+Shift+I/J/C
                (e.ctrlKey && e.keyCode === 85)) { // Ctrl+U
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }, true);

        // 3. Disable context menu
        window.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        }, true);
    }

    // XOR String Obfuscation
    function xorCipher(text, key = 'HOANGHA_TRONGKIEN_VIP') {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return btoa(unescape(encodeURIComponent(result)));
    }

    function xorDecipher(base64Text, key = 'HOANGHA_TRONGKIEN_VIP') {
        try {
            const text = decodeURIComponent(escape(atob(base64Text)));
            let result = '';
            for (let i = 0; i < text.length; i++) {
                result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
            }
            return result;
        } catch (e) {
            return null;
        }
    }

    return {
        generateHWID,
        sha256,
        initAntiTampering,
        xorCipher,
        xorDecipher,
        isTampered: () => _tamperDetected
    };
})();

window.SecurityEngine = SecurityEngine;
