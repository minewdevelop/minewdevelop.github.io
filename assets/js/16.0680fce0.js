(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{177:function(e,t,a){e.exports=a.p+"assets/img/design.ac742719.png"},178:function(e,t,a){e.exports=a.p+"assets/img/addframework.afaca928.png"},179:function(e,t,a){e.exports=a.p+"assets/img/frameworkadded.f41a4903.png"},180:function(e,t,a){e.exports=a.p+"assets/img/bluetoothdescription.7ceeb2e7.png"},227:function(e,t,a){"use strict";a.r(t);var s=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"minewmodulekit-programming-guide-for-ios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minewmodulekit-programming-guide-for-ios","aria-hidden":"true"}},[e._v("#")]),e._v(" MinewModuleKit Programming Guide for iOS")]),e._v(" "),s("p",[e._v("This SDK only supports the module device producted by Minew. The developers can handle all bluetooth operations between iPhone and modules. such as: scan modules, connect modules, write data to modules, receive data from modules and so on.")]),e._v(" "),s("h3",{attrs:{id:"preworks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preworks","aria-hidden":"true"}},[e._v("#")]),e._v(" PreWorks")]),e._v(" "),s("p",[e._v("This framework is very simple: the MTModuleManager is device managing Class, always using shared instance when the APP is running. the MTModule is device instance Class, the SDK will create instances for devices. the developer can use the MTModule instance for operate module devices.")]),e._v(" "),s("p",[e._v("The framework is as the screenshot below:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(177),alt:"设计说明"}})]),e._v(" "),s("p",[s("em",[e._v("MTModuleManager：")]),e._v(" Device managing class, you can scan module devices around, and connect to the modules.")]),e._v(" "),s("p",[s("em",[e._v("MTModule：")]),e._v(" the Module instance class, when the manager found a physical module device it will create a module instance for the device, the instance is correspond to the module device.")]),e._v(" "),s("h3",{attrs:{id:"start-developing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-developing","aria-hidden":"true"}},[e._v("#")]),e._v(" Start Developing")]),e._v(" "),s("h5",{attrs:{id:"environment："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environment：","aria-hidden":"true"}},[e._v("#")]),e._v(" Environment：")]),e._v(" "),s("ul",[s("li",[e._v("Xcode9+，This SDK is compiled by Xcode9, Please use Xcode 9 or higher version.")]),e._v(" "),s("li",[e._v("iOS8，Limit the lowest system version to iOS8;")])]),e._v(" "),s("h5",{attrs:{id:"import-to-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-to-project","aria-hidden":"true"}},[e._v("#")]),e._v(" Import to project:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v('please copy the framework file "MTModuleKit.framework" to your project, then add to your project.  as the screenshot below:')]),e._v(" "),s("p",[s("img",{attrs:{src:a(178),alt:"添加framework"}})])]),e._v(" "),s("li",[s("p",[e._v('Please Click: “Target” -> General -> Embedded Binaries , then click the  "+" button and click "Add Other" add the framework to "Embedded Binaries", same in ”Linked Frameworks and Libraries“, as the screenshot below:')])])]),e._v(" "),s("p",[s("img",{attrs:{src:a(179),alt:"frameworkadded"}})]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v('if you are using Swift for development, you should add a "Objective C BridgingHeader .h" file (do it yourself please), and add "import <MTModuleKit/MTModuleKit.h>" to the file.')]),e._v(" "),s("li",[e._v('!!! from iOS10, the developer should add a usage description for the project: add Key-Value "Privacy - Bluetooth Peripheral Usage Description" - "You description" to the info.plist file. as the screenshot below:')])]),e._v(" "),s("p",[s("img",{attrs:{src:a(180),alt:"bluetoothdescription"}})]),e._v(" "),s("h4",{attrs:{id:"start-developing-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-developing-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Start Developing")]),e._v(" "),s("h5",{attrs:{id:"scan-devices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scan-devices","aria-hidden":"true"}},[e._v("#")]),e._v(" Scan devices")]),e._v(" "),s("p",[e._v("First of all, you need get the shared instance of MTModuleManager, the check the iPhone's bluetooth status, then you can scan the module devices.")]),e._v(" "),s("div",{staticClass:"language-objective-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// get the Manager shared instance.\nMTModuleManager *manager = [MTModuleManager sharedInstance];\n\n// the bluetooth status of iPhone\nif(manager.status == Poweron) {\n     // start scan for devices.\n    [manager startScan:^(NSArray<MTModule *> *Modules){\n        // it will callback if the SDK found devices.\n    }];   \n}\n\n// if you need to response for the changes of bluetooth status. please listen to the block\n[manager didChangesBluetoothStatus:^(BluetoothStatus status){\n    \n    switch(status) {\n        case Poweron:\n            NSLog(@"bluetooth status change to poweron");\n            break;\n        case Poweroff:\n            NSLog(@"bluetooth status change to poweroff");\n            break;\n        case Unknown:\n            NSLog(@"bluetooth status change to unknown");\n    }\n}];\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br")])]),s("p",[e._v("Please Note: only the iPhone bluetooth poweron can the SDK works well.")]),e._v(" "),s("h5",{attrs:{id:"connect-to-the-device"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-the-device","aria-hidden":"true"}},[e._v("#")]),e._v(" connect to the device")]),e._v(" "),s("div",{staticClass:"language-objective-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// get the module from last step.\nMTModule *module = modules[0];\n\n// listen to the changes of device connection\n// ！！！writing data to device needs connected status.\n[module didChangeConnection:^(Connection con){\n    if(con == Connected) {\n        NSLog(@"设备已经建立连接");\n    }\n}];\n\n// connect to a module device.\n[manager connect:module];\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("h5",{attrs:{id:"write-data-to-device"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write-data-to-device","aria-hidden":"true"}},[e._v("#")]),e._v(" Write data to device")]),e._v(" "),s("p",[e._v("from last step, you can write or receive data from device when the device connected to iPhone.")]),e._v(" "),s("div",{staticClass:"language-objective-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// write data to device\n// at first, make the data you want to write\n// This is a 4 bytes data: 0x01,0x02,0x03,0x04.\nuint8_t bytes[4] = {0x01, 0x02, 0x03, 0x04};\nNSData *data = [NSData dataWithBytes:&bytes length:4];\n\n// then write the data above to device\n// you can get a writing result from the block.\n[module writeData:data completion:^(BOOL success, NSError *error){\n    if(success) {\n        NSLog(@"write data successfully.");\n    }\n    else {\n        NSLog(@"write data failed.");\n    }\n}];\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br")])]),s("h5",{attrs:{id:"receiving-data-from-device"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-device","aria-hidden":"true"}},[e._v("#")]),e._v(" Receiving data from device.")]),e._v(" "),s("p",[e._v("We don't know when the device send data, so please implementate the block.")]),e._v(" "),s("div",{staticClass:"language-objective-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// the data receiving block.\n[module didReceiveData:^(NSData *data){\n    NSLog(@"Data received：%@",data);\n}];\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h3",{attrs:{id:"tables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tables","aria-hidden":"true"}},[e._v("#")]),e._v(" Tables")]),e._v(" "),s("h5",{attrs:{id:"mtmodulemanager-s-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mtmodulemanager-s-properties","aria-hidden":"true"}},[e._v("#")]),e._v(" MTModuleManager's properties")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("status")]),e._v(" "),s("td",[e._v("BluetoothStatus")]),e._v(" "),s("td",[e._v("the iPhone's bluetooth status")])]),e._v(" "),s("tr",[s("td",[e._v("scannedModules")]),e._v(" "),s("td",[e._v("NSArray")]),e._v(" "),s("td",[e._v("the scanned devices.")])]),e._v(" "),s("tr",[s("td",[e._v("connectedModules")]),e._v(" "),s("td",[e._v("NSArray")]),e._v(" "),s("td",[e._v("the connected devices.")])])])]),e._v(" "),s("h5",{attrs:{id:"mtmodule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mtmodule","aria-hidden":"true"}},[e._v("#")]),e._v(" MTModule")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("name")]),e._v(" "),s("td",[e._v("NSString")]),e._v(" "),s("td",[e._v("the bluetooth name")])]),e._v(" "),s("tr",[s("td",[e._v("identifier")]),e._v(" "),s("td",[e._v("NSString")]),e._v(" "),s("td",[e._v("the id of the device *")])]),e._v(" "),s("tr",[s("td",[e._v("advertisingData")]),e._v(" "),s("td",[e._v("NSData")]),e._v(" "),s("td",[e._v("the advertisement data")])]),e._v(" "),s("tr",[s("td",[e._v("lastUpdate")]),e._v(" "),s("td",[e._v("NSDate")]),e._v(" "),s("td",[e._v("last scanned timestamp")])]),e._v(" "),s("tr",[s("td",[e._v("connection")]),e._v(" "),s("td",[e._v("Connection")]),e._v(" "),s("td",[e._v("the connection status")])]),e._v(" "),s("tr",[s("td",[e._v("rssi")]),e._v(" "),s("td",[e._v("NSInteger")]),e._v(" "),s("td",[e._v("the RSSI")])]),e._v(" "),s("tr",[s("td",[e._v("uuids")]),e._v(" "),s("td",[e._v("NSDictionary")]),e._v(" "),s("td",[e._v("the Service UUID")])]),e._v(" "),s("tr",[s("td",[e._v("infos")]),e._v(" "),s("td",[e._v("NSDictionary")]),e._v(" "),s("td",[e._v("Device informations  **")])])])]),e._v(" "),s("p",[e._v("*：due to the limit of iOS, the SDK can't get the device's Mac address, but you can use the identifier. please note every scan task you will get different identifier for every device.")]),e._v(" "),s("p",[e._v("**： only some device can get the device's information, nil value means not supported.")])])}],n=a(0),i=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);i.options.__file="iOS_MinewModuleKit_Software_Development_Kit_Guide.md";t.default=i.exports}}]);