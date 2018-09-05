(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{229:function(e,a,n){"use strict";n.r(a);var s=n(0),t=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"minewbeacon-software-development-kit-guide"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#minewbeacon-software-development-kit-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" MinewBeacon Software Development Kit Guide")]),e._v(" "),n("h2",{attrs:{id:"configs-before-development"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configs-before-development","aria-hidden":"true"}},[e._v("#")]),e._v(" Configs before development")]),e._v(" "),n("p",[e._v("The SDK used CoreLocation and CoreBluetooth.")]),e._v(" "),n("p",[e._v("In order to comply with Apple's audit specifications, we need to some distinction for using background task or not.")]),e._v(" "),n("p",[e._v("for the developer not require  background task:")]),e._v(" "),n("div",{staticClass:"language-objective-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("  // 1. set backgroundSupport to NO \n    [aManager startScan:uuids backgroundSupport: NO];\n\n // 2. disable Location update and Uses Bluetooth LE accessories in your project. \n\n //  PS: Because of the iOS restrictions, if some device don't support background scanning, you will not get these data for the device when the App enter background, although the application process is not in a suspended state.\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v("for the developer require background task：")]),e._v(" "),n("div",{staticClass:"language-objective-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('  // 1. set backgroundSupport to YES\n  [aManager startScan:uuids backgroundSupport :YES];\n   \n  // 2、enable Location update and Uses Bluetooth LE accessories.at the same time, you need add "NSLocationAlwaysUsageDescription" item to your project\'s info.plist file. \n\n  // PS：SDK will change to background mode and continue to scan,if there are devices support background mode, all delegate methods will be execute normally.\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v('Configs for "info.plist"')]),e._v(" "),n("div",{staticClass:"language-objective-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("  \x3c!-- Bluetooth --\x3e \n<key>NSBluetoothPeripheralUsageDescription</key> \n<string>App will use bluetooth to communication with devices.</string> \n  \x3c!-- Location --\x3e \n<key>NSLocationUsageDescription</key> \n<string>App will record your location</string> \n\x3c!-- use location while app in use --\x3e \n<key>NSLocationWhenInUseUsageDescription</key> \n<string>App will record your location</string> \n  \n\x3c!-- if you need background scanning, you should add configs below --\x3e\n\x3c!-- always use location--\x3e \n<key>NSLocationAlwaysUsageDescription</key> \n<string>App will record your location</string> \n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br")])]),n("h2",{attrs:{id:"get-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-started","aria-hidden":"true"}},[e._v("#")]),e._v(" Get Started")]),e._v(" "),n("p",[e._v("MinewBeaconManager (as Manager below) can scan or stop scan devices around, it will create "),n("strong",[e._v("Minewbeacon")]),e._v("(as Beacon below)  instance for every device. it will listen the data update and appear(we think a device disappeared if it doesn't update data in seconds, we think a device appeared if it is scanned at first time or scanned from \"disappear\" ) state of devices, at the same time, Manager will listen the changes of cellphone's Bluetooth state. Here is the code below:")]),e._v(" "),n("ol",[n("li",[e._v("Get Manager shared instance, set delegate:")])]),e._v(" "),n("div",{staticClass:"language-objective-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("MinewBeaconManager *manager = [MinewBeaconManager sharedInstance];\nmanager.delegate = self;\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Start scan for devices.")])]),e._v(" "),n("div",{staticClass:"language-objective-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[manager startScan:@[@"uuid1", @"uuid2",...] backgroundSupport:NO];\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("get data of devices from delegate method.")])]),e._v(" "),n("div",{staticClass:"language-objective-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// if the manager found devices, this method will be executed every second, \n- (void)minewBeaconManager:(MinewBeaconManager *)manager didRangeBeacons:(NSArray<MinewBeacon *> *)beacons\n{\n    NSLog(@"current beacons:%@", beacons);\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[e._v("get data of beacon instance.")]),e._v(" "),n("p",[e._v('Via method "-(MinewBeaconValue *)getBeaconValue:(BeaconValueIndex)index". for data versatility, we use '),n("strong",[e._v("MinewBeaconValue")]),e._v(' to handle all types of data, BeaconValue instance can be a string, int, float or bool, every "index" correspond to a value, as the code below:')])])]),e._v(" "),n("div",{staticClass:"language-objective-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("MinewBeacon *beacon = beacons[0];\n\n// uuid\nNSString *uuid = [beacon getBeaconValue:BeaconValueIndex_UUID].stringValue; \n// major\nNSInteger major = (long)[beacon getBeaconValue:BeaconValueIndex_Major].intValue;\n// minor\nNSInteger minor = (long)[beacon getBeaconValue:BeaconValueIndex_Minor].intValue;\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[e._v("Table for ValueIndex and data types")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("index")]),e._v(" "),n("th",[e._v("Data name")]),e._v(" "),n("th",[e._v("Type")]),e._v(" "),n("th",[e._v("Detail")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("BeaconValueIndex_UUID")]),e._v(" "),n("td",[e._v("uuid")]),e._v(" "),n("td",[e._v("stringValue")]),e._v(" "),n("td")]),e._v(" "),n("tr",[n("td",[e._v("BeaconValueIndex_Name")]),e._v(" "),n("td",[e._v("Name")]),e._v(" "),n("td",[e._v("stringValue")]),e._v(" "),n("td")]),e._v(" "),n("tr",[n("td",[e._v("BeaconValueIndex_Major")]),e._v(" "),n("td",[e._v("major")]),e._v(" "),n("td",[e._v("intValue")]),e._v(" "),n("td")]),e._v(" "),n("tr",[n("td",[e._v("BeaconValueIndex_Minor")]),e._v(" "),n("td",[e._v("minor")]),e._v(" "),n("td",[e._v("intValue")]),e._v(" "),n("td")]),e._v(" "),n("tr",[n("td",[e._v("BeaconValueIndex_WechatId")]),e._v(" "),n("td",[e._v("wechatId")]),e._v(" "),n("td",[e._v("intValue")]),e._v(" "),n("td",[e._v("Partial device")])]),e._v(" "),n("tr",[n("td",[e._v("BeaconValueIndex_Mac")]),e._v(" "),n("td",[e._v("MAC address")]),e._v(" "),n("td",[e._v("stringValue")]),e._v(" "),n("td",[e._v("Partial device")])]),e._v(" "),n("tr",[n("td",[e._v("BeaconValueIndex_RSSI")]),e._v(" "),n("td",[e._v("rssi")]),e._v(" "),n("td",[e._v("intValue")]),e._v(" "),n("td")]),e._v(" "),n("tr",[n("td",[e._v("BeaconValueIndex_BatteryLevel")]),e._v(" "),n("td",[e._v("Battery")]),e._v(" "),n("td",[e._v("intValue")]),e._v(" "),n("td")]),e._v(" "),n("tr",[n("td",[e._v("BeaconValueIndex_Temperature")]),e._v(" "),n("td",[e._v("Temperature")]),e._v(" "),n("td",[e._v("floatValue")]),e._v(" "),n("td",[e._v("Partial device")])]),e._v(" "),n("tr",[n("td",[e._v("BeaconValueIndex_Humidity")]),e._v(" "),n("td",[e._v("Humidity")]),e._v(" "),n("td",[e._v("floatValue")]),e._v(" "),n("td")]),e._v(" "),n("tr",[n("td",[e._v("BeaconValueIndex_Txpower")]),e._v(" "),n("td",[e._v("txPower")]),e._v(" "),n("td",[e._v("intValue")]),e._v(" "),n("td")]),e._v(" "),n("tr",[n("td",[e._v("BeaconValueIndex_InRange")]),e._v(" "),n("td",[e._v("in range")]),e._v(" "),n("td",[e._v("boolValue")]),e._v(" "),n("td")]),e._v(" "),n("tr",[n("td",[e._v("BeaconValueIndex_Connectable")]),e._v(" "),n("td",[e._v("Connectable")]),e._v(" "),n("td",[e._v("boolValue")]),e._v(" "),n("td")])])]),e._v(" "),n("p",[e._v("you just need get the data you want via indexs above.")]),e._v(" "),n("p",[e._v("Now, we finish the basic use of SDK, more codes below:")]),e._v(" "),n("p",[e._v("listen to the device appear and disappear changes.")]),e._v(" "),n("div",{staticClass:"language-objective-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// disappear devices.\n- (void)minewBeaconManager:(MinewBeaconManager *)manager disappearBeacons:(NSArray<MinewBeacon *> *)beacons\n{\n    NSLog(@"---disappear beacons:%@", beacons);\n}\n\n// appear devices.\n- (void)minewBeaconManager:(MinewBeaconManager *)manager appearBeacons:(NSArray<MinewBeacon *> *)beacons\n{\n    NSLog(@"appear beacons:%@", beacons);\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br")])]),n("p",[e._v("Listen to the Bluetooth state of cellphone.")]),e._v(" "),n("p",[e._v("Three Bluetooth state:")]),e._v(" "),n("p",[e._v("BluetoothState：BluetoothStatePowerOn（poweron），BluetoothStatePowerOff（power off），BluetoothStateUnknown（unknown）")]),e._v(" "),n("div",{staticClass:"language-objective-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// listen to the changes of bluetooth state\n- (void)minewBeaconManager:(MinewBeaconManager *)manager didUpdateState:(BluetoothState)state\n{\n    NSLog(@"Bluetooth state:%ld", (long)state);\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[e._v("you can also check bluetooth state like this:")]),e._v(" "),n("div",{staticClass:"language-objective-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('BluetoothState state = [aManager checkBluetoothState];\n\nif(state == BluetoothStatePowerOn)\n  NSLog(@"Bluetooth is PowerOn now.");\nelse if ...\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("h2",{attrs:{id:"class-reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#class-reference","aria-hidden":"true"}},[e._v("#")]),e._v(" Class reference")]),e._v(" "),n("h3",{attrs:{id:"minewbeacon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#minewbeacon","aria-hidden":"true"}},[e._v("#")]),e._v(" MinewBeacon")]),e._v(" "),n("p",[e._v("Device instance Class,")]),e._v(" "),n("div",{staticClass:"language-objective-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// get data of device\n -(MinewBeaconValue *)getBeaconValue:(BeaconValueIndex)index;\n\n// such as get UUID：\n  [aBeacon getBeaconValue:BeaconValueIndex_UUID].stringValue;\n\n// index from "BeaconValueIndex"；\n // !!!:you should get data by its type\ntypedef NS_ENUM(NSInteger, BeaconValueIndex) {\n     // UUID      \n    BeaconValueIndex_UUID = 1,  // stringValue\n    // Major \n    BeaconValueIndex_Major,   // intValue\n    // Minor\n    BeaconValueIndex_Minor,   // intValue\n    // Name\n    BeaconValueIndex_Name,   // stringValue\n    // RSSI\n    BeaconValueIndex_RSSI,   //  intValue\n    // battery\n    BeaconValueIndex_BatteryLevel,  // intValue\n    // temperature\n    BeaconValueIndex_Temperature, \n    // humidity\n    BeaconValueIndex_Humidity, \n    // TxPower\n    BeaconValueIndex_TxPower,  // intValue\n    // in scanning range or not\n    BeaconValueIndex_InRage,  // boolValue\n    // wechatId，（Partial device）\n    BeaconValueIndex_WechatId, // intValue\n};\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br")])]),n("h3",{attrs:{id:"minewbeaconvalue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#minewbeaconvalue","aria-hidden":"true"}},[e._v("#")]),e._v(" MinewBeaconValue")]),e._v(" "),n("p",[e._v("Device value instance class")]),e._v(" "),n("div",{staticClass:"language-objective-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// get int value\n@property (nonatomic, readonly, assign) NSInteger intValue;\n\n// get float value\n@property (nonatomic, readonly, assign) float floatValue;\n\n// get string value\n@property (nonatomic, readonly, copy) NSString *stringValue;\n\n// get data value\n@property (nonatomic, readonly, strong) NSData  *dataValue;\n\n// get bool value\n@property (nonatomic, readonly, assign) BOOL boolValue;\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br")])]),n("h3",{attrs:{id:"minewbeaconmanager"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#minewbeaconmanager","aria-hidden":"true"}},[e._v("#")]),e._v(" MinewBeaconManager")]),e._v(" "),n("p",[e._v("Global Manager class.")]),e._v(" "),n("div",{staticClass:"language-objective-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// delegate\n@protocol MinewBeaconManagerDelegate <NSObject>\n@optional\n\n// scanned new devices, callback every 3 seconds, \n- (void)minewBeaconManager:(MinewBeaconManager * )manager appearBeacons:(NSArray<MinewBeacon *> *)beacons;\n\n// listen the disappear devices (doesn\'t update data in 10 second.)\n- (void)minewBeaconManager:(MinewBeaconManager * )manager disappearBeacons:(NSArray<MinewBeacon *> *)beacons;\n\n// listen the appear devices (scanned first time.)\n- (void)minewBeaconManager:(MinewBeaconManager * )manager didRangeBeacons:(NSArray<MinewBeacon *> * )beacons;\n\n@end\n\n// \n@interface MinewBeaconManager : NSObject\n\n// sharedinstance\n- (MinewBeaconManager  *)sharedInstance;\n\n// start scan devices, "uuids" is a uuid string array, "enable" is a switch for background scanning support \n- (void)startScan:(NSArray<NSString *> *)uuids backgroundSupport :(BOOL)enable;\n\n// stop scan for device.\n- (void)stopScan;\n\n// delegate\n@property (nonatomic, strong) id <MinewBeaconManagerDelegate> delegate;\n\n@property (nonatomic, readonly, assign) BluetoothState\n\n// all devices scanned.\n@property (nonatomic, readonly, copy) NSArray<MinewBeacon *> *scannedBeacons;\n\n// all devices in range.\n@property (nonatomic, readonly, copy) NSArray<MinewBeacon *> *inRangeBeacons;\n\n@end\n\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br"),n("span",{staticClass:"line-number"},[e._v("34")]),n("br"),n("span",{staticClass:"line-number"},[e._v("35")]),n("br"),n("span",{staticClass:"line-number"},[e._v("36")]),n("br"),n("span",{staticClass:"line-number"},[e._v("37")]),n("br"),n("span",{staticClass:"line-number"},[e._v("38")]),n("br"),n("span",{staticClass:"line-number"},[e._v("39")]),n("br"),n("span",{staticClass:"line-number"},[e._v("40")]),n("br")])]),n("p",[e._v("#Change log")]),e._v(" "),n("ul",[n("li",[e._v("2017.10.16 English version")]),e._v(" "),n("li",[e._v("2016.12.22 update for iOS 10")]),e._v(" "),n("li",[e._v("2016.9.18 update for Apple's review")]),e._v(" "),n("li",[e._v("2016.11.29 update for new firmware.")])])])}],!1,null,null,null);t.options.__file="iOS_Beacon_Software_Development_Kit_Guide.md";a.default=t.exports}}]);