(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{402:function(t,e,a){"use strict";a.r(e);var n=a(14),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"mineweslsinglekit-documentation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mineweslsinglekit-documentation"}},[t._v("#")]),t._v(" MinewESLSingleKit Documentation")]),t._v(" "),e("p",[t._v("​\tThis set of SDK only supports Bluetooth ESL devices produced by Minew. The SDK can help developers handle all the work between the phone and the ESL, including: scanning the device, connecting the device, writing data to the device, receiving data from the device, etc.")]),t._v(" "),e("h3",{attrs:{id:"preliminary-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preliminary-work"}},[t._v("#")]),t._v(" Preliminary work")]),t._v(" "),e("p",[t._v("​\tOverall framework: MTCentralManager is a device management class, which is always a singleton when the APP is running. MTPeripheral is a device instance class. This suite will generate a MTPeripheral instance for each device to facilitate monitoring and operating devices.")]),t._v(" "),e("p",[e("strong",[t._v("MTCentralManager")]),t._v(" : Device management class, which can scan the surrounding ESL devices, and can connect them, verify them, etc.")]),t._v(" "),e("p",[e("strong",[t._v("MTPeripheral")]),t._v(" : Device instance class. When MTCentralManager discovers a physical device, MTCentralManager will generate a MTPeripheral instance, which corresponds to a physical device.")]),t._v(" "),e("p",[e("strong",[t._v("MTBroadcastHandler")]),t._v(" : Device broadcast class, which can get the data when the device broadcasts.")]),t._v(" "),e("p",[e("strong",[t._v("MTConnectionHandler")]),t._v(" : Device connection class for receiving and sending data from the device.")]),t._v(" "),e("p",[e("strong",[t._v("MTUtils")]),t._v(" : Equipment verification and data processing.")]),t._v(" "),e("h3",{attrs:{id:"get-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-started"}},[t._v("#")]),t._v(" Get started")]),t._v(" "),e("h4",{attrs:{id:"development-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#development-environment"}},[t._v("#")]),t._v(" Development environment:")]),t._v(" "),e("p",[t._v("-Xcode10 +, the current SDK is compiled with Xcode11, please use Xcode10 and above for development;\n-iOS11, the minimum system version is iOS11;")]),t._v(" "),e("h4",{attrs:{id:"import-into-the-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-into-the-project"}},[t._v("#")]),t._v(" Import into the project:")]),t._v(" "),e("h5",{attrs:{id:"cocoapods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cocoapods"}},[t._v("#")]),t._v(" CocoaPods")]),t._v(" "),e("p",[t._v("MinewESLSingleKit is available through "),e("a",{attrs:{href:"http://cocoapods.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CocoaPods"),e("OutboundLink")],1),t._v(". To install it, simply add the following line to your Podfile, and then import <MinewESLSingleKit/MinewESLSingleKit.h>:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("pod 'MinewESLSingleKit'\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h5",{attrs:{id:"manually"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manually"}},[t._v("#")]),t._v(" Manually")]),t._v(" "),e("ol",[e("li",[t._v("Copy the development kit files: MinewESLKit.a and .h files to the project project directory, and then add them to the project.")])]),t._v(" "),e("p",[t._v("PS:")]),t._v(" "),e("ol",[e("li",[t._v('!!! In iOS10 and above, Apple added permission restrictions on Bluetooth APi. You need to add a string to the project\'s info.plist file: Privacy-Bluetooth Peripheral Usage Description-"Your usage description".')]),t._v(" "),e("li",[t._v('!!! In iOS13 and above, Apple added permission restrictions on Bluetooth APi. You need to add a string to the project\'s info.plist file: Privacy-Bluetooth Always Usage Description-"Your usage description".')])]),t._v(" "),e("h4",{attrs:{id:"start-development"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-development"}},[t._v("#")]),t._v(" Start development")]),t._v(" "),e("h5",{attrs:{id:"scanning-equipment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scanning-equipment"}},[t._v("#")]),t._v(" Scanning equipment")]),t._v(" "),e("p",[t._v("​\tFirst you need to get the singleton of MTCentralManager, then check the current Bluetooth status of the phone, and then you can scan the device.")]),t._v(" "),e("div",{staticClass:"language-objc line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-objc"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get Manager singleton")]),t._v("\nMTCentralManager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" manager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MTCentralManager sharedInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_after")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_time")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DISPATCH_TIME_NOW"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("int64_t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" NSEC_PER_SEC"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_get_main_queue")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The current state of the Bluetooth switch on the mobile phone")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" manager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" PowerStatePoweredOn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// start device scan")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("manager startScan"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSArray "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MTPeripheral "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" devices"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" deviceAry "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" devices"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Scanned devices can also be obtained using manager.scannedPeris")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If you need to respond to the Bluetooth status of your phone. Please listen for the callback.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("manager didChangesBluetoothStatus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PowerState status"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" PowerStatePoweredOn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bluetooth status change to poweron"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" PowerStatePoweredOff"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bluetooth status change to poweroff"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" PowerStateUnknown"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bluetooth status change to unknown"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br")])]),e("p",[e("strong",[t._v("PS: The entire SDK works only when the Bluetooth state of the phone is in Poweron.")])]),t._v(" "),e("h5",{attrs:{id:"connect-to-device"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-device"}},[t._v("#")]),t._v(" Connect to device")]),t._v(" "),e("div",{staticClass:"language-objc line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-objc"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The scanned device can be obtained from the previous step")]),t._v("\nMTPeripheral "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" device "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" deviceAry "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Connect the device")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("manager connectToPeriperal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Listen for device connection status.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connector didChangeConnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Connection connection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Vaildated"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Successful verification, successfully connected to the device")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vaildated"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Disconnected"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"device has disconnected."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("h5",{attrs:{id:"write-data-to-the-device"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#write-data-to-the-device"}},[t._v("#")]),t._v(" Write data to the device")]),t._v(" "),e("p",[t._v("​\tTake the next step, when the mobile phone successfully establishes a connection with a device and the authentication is successful, the device can read and write.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Write data")]),t._v(" "),e("div",{staticClass:"language-objc line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-objc"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" _ per"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connector writeData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data completion"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL success"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NSError "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" _Nonnull error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"write data failed:% @"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"write data success"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("Receive data")]),t._v(" "),e("div",{staticClass:"language-objc line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-objc"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_per"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connector didReceiveData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSData "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" _Nonnull data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"receive data success:% @"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"receive data failed"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])])])]),t._v(" "),e("h3",{attrs:{id:"schedule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schedule"}},[t._v("#")]),t._v(" Schedule")]),t._v(" "),e("h5",{attrs:{id:"mtcentralmanager-property-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mtcentralmanager-property-description"}},[t._v("#")]),t._v(" MTCentralManager Property Description")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("status")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("PowerState")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("phone's bluetooth status")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("scannedPeris")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSArray")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("scanned devices")])])])]),t._v(" "),e("h5",{attrs:{id:"mtperipheral-property-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mtperipheral-property-description"}},[t._v("#")]),t._v(" MTPeripheral Property Description")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("identifier")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSString")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("device Identifier")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("broadcast")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("MTBroadcastHandler")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("obejct of MTBroadcastHandler")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("connector")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("MTConnectionHandler")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("obejct of MTConnectionHandler")])])])]),t._v(" "),e("h5",{attrs:{id:"mtbroadcasthanler-property-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mtbroadcasthanler-property-description"}},[t._v("#")]),t._v(" MTBroadcastHanler Property Description")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("name")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSString")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("device name")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("rssi")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSInteger")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("device RSSI")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("mac")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSString")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("device Mac")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("identifier")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSString")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("device identifier")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("firmVersion")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSString")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("firmversion")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("hardwareVersion")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSString")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("hardwareVersion")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("screenInfo")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSString")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("screenInfo")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("battery")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSString")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("battery")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("chipTemp")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("double")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("chipTemp")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("heartbeat")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSString")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("heartbeat")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("tagRssi")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSString")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("tagRssi")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("chipInfo")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSString")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("chipInfo")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("imageIdData")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSData")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("imageIdData")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("errorCode")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSInteger")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("errorCode")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("peripheralSupport")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSString")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("peripheralSupport")])])])]),t._v(" "),e("h5",{attrs:{id:"mtconnectionhandler-property-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mtconnectionhandler-property-description"}},[t._v("#")]),t._v(" MTConnectionHandler Property Description")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("macString")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("NSString")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("device Mac")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("connection")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Connection")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("device connect status")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);