(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{384:function(a,s,t){"use strict";t.r(s);var n=t(14),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"minewtoolskit-documentation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minewtoolskit-documentation"}},[a._v("#")]),a._v(" MinewToolsKit Documentation")]),a._v(" "),s("p",[a._v("This set of SDK only supports Bluetooth smart lock devices produced by Minew. The SDK can help developers handle all the work between the mobile phone and the smart lock, including: scanning the Bluetooth smart lock, broadcasting data, unlocking, reading device information, firmware upgrades, etc.")]),a._v(" "),s("h2",{attrs:{id:"preliminary-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preliminary-work"}},[a._v("#")]),a._v(" Preliminary work")]),a._v(" "),s("p",[a._v("Overall framework: "),s("code",[a._v("ScanLockManager")]),a._v(" is a device management class, which is always a singleton when the APP is running. "),s("code",[a._v("LockModule")]),a._v(" is a device instance class. This kit will generate an instance for each device, which will be used after scanning and connection. It contains device broadcast data, which will be updated as the device continuously broadcasts.")]),a._v(" "),s("p",[s("code",[a._v("ScanLockManager")]),a._v("：Device management, you can scan the surrounding smart lock devices and stop Bluetooth scanning.")]),a._v(" "),s("p",[s("code",[a._v("LockModule")]),a._v("：The device instance obtained during scanning corresponds to the Bluetooth smart lock device and will be used after scanning and connecting")]),a._v(" "),s("h2",{attrs:{id:"import-to-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-to-project"}},[a._v("#")]),a._v(" Import to project")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Development environment")]),a._v(" "),s("p",[a._v("The SDK supports Android 5.0 at a minimum, and the corresponding API Level is 21. Set "),s("code",[a._v("minSdkVersion")]),a._v(" to 21or above in module's "),s("code",[a._v("build.gradle")])])]),a._v(" "),s("li",[s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[a._v("android "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    defaultConfig "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        applicationId "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"com.xxx.xxx"')])]),a._v("\n        minSdkVersion "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("21")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("Add "),s("code",[a._v("MinewWristbandKit.jar")]),a._v(" to the libs folder of the module, and add the following statement in "),s("code",[a._v("build.gradle")]),a._v(" of the "),s("code",[a._v("module")]),a._v(" (add dependencies directly):")]),a._v(" "),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[a._v("implementation "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'libs/MinewToolsKit.jar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nimplementation "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'org.lucee:bcprov-jdk15on:1.52.0'")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("Or right click on the jar file and select "),s("code",[a._v("Add as Library")]),a._v(" to add to the current module")])]),a._v(" "),s("li",[s("p",[a._v("The following permissions are required in "),s("code",[a._v("AndroidManifest.xml")]),a._v(". If "),s("code",[a._v("targetSdkVersion")]),a._v(" is greater than 23, you need to do "),s("strong",[a._v("Permission Management")]),a._v(" to obtain permissions")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("uses-permission")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("android:")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("android.permission.ACCESS_COARSE_LOCATION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("uses-permission")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("android:")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("android.permission.ACCESS_FINE_LOCATION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("uses-permission")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("android:")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("android.permission.BLUETOOTH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("uses-permission")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("android:")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("android.permission.BLUETOOTH_ADMIN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])])])]),a._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),s("h4",{attrs:{id:"start-scan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-scan"}},[a._v("#")]),a._v(" Start scan")]),a._v(" "),s("p",[s("strong",[a._v("For Android 6.0 and above, BLE scanning is only possible after applying for positioning permission, and the positioning switch must be turned on!")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MinewLockCenterManager")]),a._v(" mLockCenterManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MinewLockCenterManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nmLockCenterManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getScanLockManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("startScan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("OnScanLockResultListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("onScanLockResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LockModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" scanLockList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//scan result")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("The sdk does not process the Bluetooth scan duration, but the scan is a power-consuming operation. Generally, the scan can be stopped in 90 seconds. If you still need to continue the scan, you can provide refresh and other operations to continue the scan.")]),a._v(" "),s("h4",{attrs:{id:"take-out-the-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#take-out-the-data"}},[a._v("#")]),a._v(" Take out the data")]),a._v(" "),s("p",[a._v("During scanning, the broadcast data obtained by the SDK is stored in the broadcast frame, and the scanned device mac address is placed in LockModule.getMacAddress() in List<LockModule>, which is required for a series of operations on the device. Frame information is also stored in LockModuleLockModule .getMinewFrame(FrameType type),")]),a._v(" "),s("p",[a._v("There are currently these frames：FrameType.DEVICE_INFO_FRAME；HISTORY_ERROR_INFO_FRAME，暂时未用到")]),a._v(" "),s("h3",{attrs:{id:"operate-the-smart-lock-device"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#operate-the-smart-lock-device"}},[a._v("#")]),a._v(" Operate the smart lock device")]),a._v(" "),s("p",[a._v("At present, the operations of smart locks mainly include: unlocking, reading device information, and firmware upgrades. Each operation is to connect the smart lock first, and then send the corresponding instructions to the smart lock to perform the corresponding steps. After each operation is completed, it will be automatically disconnected. Open the smart lock connection, no need to disconnect the device")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MinewLockCenterManager")]),a._v(" mCenterManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MinewLockCenterManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//Before operating the smart lock, call the method, initialize the number of operations //and start the 10-second timeout timer")]),a._v("\nmCenterManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getConnLockManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("initOperaState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*\n* Status callback during connection\n*\n* @param context \n* @param LockModule: Device to connect\n* @param OperationType: Operation type\n* unlock OperationType.OPERA_OPEN_LOCK；\n* Read device information: OperationType.OPERA_READ_DEVICE;\n* There are two steps to firmware upgrade: OperationType.OPERA_OTA1，                    \tOperationType.OPERA_OT2，\n* connect()Method used OPERA_OTA1\n* @param OnConnStateListener: Operation interface return status\n*/")]),a._v("\n mCenterManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getConnLockManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LockModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("OperationType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                                             "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("OnConnStateListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("onOperaLockState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" macAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConnectionState")]),a._v(" connectionState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                                 "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConnectionState")]),a._v(" operaState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                                 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" operaResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("                                                                           \n                                             "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br")])]),s("p",[a._v("固件升级；")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * Firmware upgrade\n *\n * @param macAddress:  Device mac\n * @param data: Upgrade package data byte[] data\n * @param  OperationType.OPERA_OTA2  \n * @param listener   Listener\n */")]),a._v("\nmanager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("firmwareUpgrade")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("macAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("OperationType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("OPERA_OTA2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("OnFirmwareUpgradeListener")]),a._v("\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("OnFirmwareUpgradeListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      \n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * Start firmware upgrade\n     */")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("startUpgrade")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   \n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * Upgrade package data writing progress\n     */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("updateProgress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" progress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * update successed\n     */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("upgradeSuccess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * upgrade unsuccessful\n     */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("upgradeFailed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br")])]),s("h3",{attrs:{id:"api-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-summary"}},[a._v("#")]),a._v(" API summary")]),a._v(" "),s("h4",{attrs:{id:"before-connecting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#before-connecting"}},[a._v("#")]),a._v(" Before connecting")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("startScan(): Start scanning. Every time you start a scan, all results of the previous scan will be cleared")])]),a._v(" "),s("li",[s("p",[a._v("stopScan():Stop scanning")])]),a._v(" "),s("li",[s("p",[a._v("connect(Context context, LockModule lockModule,OperationType operationType, OnConnStateListener listener ): Operate the smart lock")])]),a._v(" "),s("li",[s("p",[a._v("disConnect(String macAddress): Disconnect")])]),a._v(" "),s("li",[s("p",[a._v("initOperaState(): Initialization before operation")])])]),a._v(" "),s("h2",{attrs:{id:"schedule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schedule"}},[a._v("#")]),a._v(" Schedule")]),a._v(" "),s("p",[a._v("nothing")]),a._v(" "),s("h2",{attrs:{id:"update-history"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-history"}},[a._v("#")]),a._v(" Update history")]),a._v(" "),s("h3",{attrs:{id:"_2020-10-15"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2020-10-15"}},[a._v("#")]),a._v(" 2020/10/15")]),a._v(" "),s("ol",[s("li",[a._v("Create SDK instructions;")])])])}),[],!1,null,null,null);s.default=e.exports}}]);