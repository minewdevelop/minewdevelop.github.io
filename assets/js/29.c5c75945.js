(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{214:function(a,n,e){"use strict";e.r(n);var s=e(0),t=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"minewbeacon-开发套件说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minewbeacon-开发套件说明","aria-hidden":"true"}},[a._v("#")]),a._v(" MinewBeacon 开发套件说明")]),a._v(" "),e("h2",{attrs:{id:"使用前的配置工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用前的配置工作","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用前的配置工作")]),a._v(" "),e("p",[a._v("当前SDK结合Location与Bluetooth两种框架编写。")]),a._v(" "),e("p",[a._v("为了符合苹果的审核规范，需要为是否需求后台支持做一些区分。")]),a._v(" "),e("p",[a._v("针对不需求后台支持的开发者：\n1、执行扫描方法时：[aManager startScan:uuids backgroundSupport :NO];  请按这里将backgroundSupport置为NO。\n2、关闭项目工程中的 Location update 和 Uses Bluetooth LE accessories 两项配置设定。\nPS：由于iOS系统限制，对于某些不支持在后台被检测的蓝牙设备，一旦应用进入后台，数据回调将会终止，尽管此时应用的进程并未处于挂起状态。")]),a._v(" "),e("p",[a._v("针对需求后台支持的开发者：\n1、执行扫描方法时：[aManager startScan:uuids backgroundSupport :YES];请按这里将backgroundSupport置为YES。\n2、需要配置项目工程的后台权限： Location update和 Uses Bluetooth LE accessories。同时在项目plist文件中加入“NSLocationAlwaysUsageDescription”项。\nPS：当应用进入后台时，SDK将切换至后台模式继续扫描，如果周围有可以在后台模式下被检测到的设备，所有代理方法将会正常回调。")]),a._v(" "),e("p",[a._v("针对iOS10系统：")]),a._v(" "),e("div",{staticClass:"language-objective-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("在iOS10系统中，苹果进一步收紧权限控制，我们的SDK使用了蓝牙和地理位置模块，因此需要在工程项目的Plist文件中添加如下配置：\n  \x3c!-- 蓝牙 --\x3e \n<key>NSBluetoothPeripheralUsageDescription</key> \n<string>App需要您的同意,才能使用蓝牙模块</string> \n  \x3c!-- 位置 --\x3e \n<key>NSLocationUsageDescription</key> \n<string>App需要您的同意,才能访问位置信息</string> \n\x3c!-- 在使用期间访问位置 --\x3e \n<key>NSLocationWhenInUseUsageDescription</key> \n<string>App需要您的同意,才能在使用期间访问位置信息</string> \n  \n 如果需要持续的后台扫描，那么还需要添加如下配置：\n\x3c!-- 始终访问位置 --\x3e \n<key>NSLocationAlwaysUsageDescription</key> \n<string>App需要您的同意,才能始终访问位置信息</string> \n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br")])]),e("h2",{attrs:{id:"开始使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 开始使用")]),a._v(" "),e("p",[a._v("MinewBeaconManager（以下简称Manager）类用来发起和停止扫描周边的蓝牙设备，它将为每一个蓝牙设备生成一个对应的Minewbeacon（以下简称Beacon）实例。当Manager扫描到蓝牙设备时，它会持续监听蓝牙设备的数据更新以及这些设备的进出状态（十秒内没有数据更新的设备被认为是消失设备，第一次扫描到或者消失后再次扫描到的设备被认为是出现设备），同时，Manager类还可以监听蓝牙状态的改变并且回调给对应的代理实例。以下是相关代码。")]),a._v(" "),e("p",[a._v("1.获取设备实例，配置代理:")]),a._v(" "),e("div",{staticClass:"language-objective-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("MinewBeaconManager *manager = [MinewBeaconManager sharedInstance];\nmanager.delegate = self;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("2.扫描设备")]),a._v(" "),e("div",{staticClass:"language-objective-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('[manager startScan:@[@"uuid1", @"uuid2",...] backgroundSupport:NO];\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("3.通过回调获取设备数据更新")]),a._v(" "),e("div",{staticClass:"language-objective-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// 获取持续的设备数据更新，此方法每1秒回调一次，当且仅当扫描到设备时才会回调。\n- (void)minewBeaconManager:(MinewBeaconManager *)manager didRangeBeacons:(NSArray<MinewBeacon *> *)beacons\n{\n    NSLog(@"current beacons:%@", beacons);\n}\n\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("p",[a._v("4.获取beacon实例的数据")]),a._v(" "),e("p",[a._v("​    通过-(MinewBeaconValue *)getBeaconValue:(BeaconValueIndex)index方法来获取设备数据，为了数据通用性，我们使用了MinewBeaconValue类（以下简称value）来统一所有的数据类型，value可以对应字符串、整型、浮点型、布尔型数据。每一个index对应一个值，如下示例：")]),a._v(" "),e("div",{staticClass:"language-objective-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("MinewBeacon *beacon = beacons[0];\n\n// 获取uuid\nNSString *uuid = [beacon getBeaconValue:BeaconValueIndex_UUID].stringValue; \n// 获取major\nNSInteger major = (long)[beacon getBeaconValue:BeaconValueIndex_Major].intValue;\n// 获取minor\nNSInteger minor = (long)[beacon getBeaconValue:BeaconValueIndex_Minor].intValue;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("p",[a._v("附表：ValueIndex以及对应数据类型")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("index")]),a._v(" "),e("th",[a._v("数据名")]),a._v(" "),e("th",[a._v("类型")]),a._v(" "),e("th",[a._v("备注")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("BeaconValueIndex_UUID")]),a._v(" "),e("td",[a._v("uuid")]),a._v(" "),e("td",[a._v("stringValue")]),a._v(" "),e("td")]),a._v(" "),e("tr",[e("td",[a._v("BeaconValueIndex_Name")]),a._v(" "),e("td",[a._v("设备名")]),a._v(" "),e("td",[a._v("stringValue")]),a._v(" "),e("td")]),a._v(" "),e("tr",[e("td",[a._v("BeaconValueIndex_Major")]),a._v(" "),e("td",[a._v("major")]),a._v(" "),e("td",[a._v("intValue")]),a._v(" "),e("td")]),a._v(" "),e("tr",[e("td",[a._v("BeaconValueIndex_Minor")]),a._v(" "),e("td",[a._v("minor")]),a._v(" "),e("td",[a._v("intValue")]),a._v(" "),e("td")]),a._v(" "),e("tr",[e("td",[a._v("BeaconValueIndex_WechatId")]),a._v(" "),e("td",[a._v("微信设备id")]),a._v(" "),e("td",[a._v("intValue")]),a._v(" "),e("td",[a._v("部分支持")])]),a._v(" "),e("tr",[e("td",[a._v("BeaconValueIndex_Mac")]),a._v(" "),e("td",[a._v("mac地址")]),a._v(" "),e("td",[a._v("stringValue")]),a._v(" "),e("td",[a._v("部分支持")])]),a._v(" "),e("tr",[e("td",[a._v("BeaconValueIndex_RSSI")]),a._v(" "),e("td",[a._v("rssi")]),a._v(" "),e("td",[a._v("intValue")]),a._v(" "),e("td")]),a._v(" "),e("tr",[e("td",[a._v("BeaconValueIndex_BatteryLevel")]),a._v(" "),e("td",[a._v("电池电量")]),a._v(" "),e("td",[a._v("intValue")]),a._v(" "),e("td")]),a._v(" "),e("tr",[e("td",[a._v("BeaconValueIndex_Temperature")]),a._v(" "),e("td",[a._v("温度")]),a._v(" "),e("td",[a._v("floatValue")]),a._v(" "),e("td",[a._v("部分支持")])]),a._v(" "),e("tr",[e("td",[a._v("BeaconValueIndex_Humidity")]),a._v(" "),e("td",[a._v("湿度")]),a._v(" "),e("td",[a._v("floatValue")]),a._v(" "),e("td",[a._v("部分支持")])]),a._v(" "),e("tr",[e("td",[a._v("BeaconValueIndex_Txpower")]),a._v(" "),e("td",[a._v("txPower")]),a._v(" "),e("td",[a._v("intValue")]),a._v(" "),e("td")]),a._v(" "),e("tr",[e("td",[a._v("BeaconValueIndex_InRange")]),a._v(" "),e("td",[a._v("是否在范围内")]),a._v(" "),e("td",[a._v("boolValue")]),a._v(" "),e("td")]),a._v(" "),e("tr",[e("td",[a._v("BeaconValueIndex_Connectable")]),a._v(" "),e("td",[a._v("是否可连接")]),a._v(" "),e("td",[a._v("boolValue")]),a._v(" "),e("td")])])]),a._v(" "),e("p",[a._v("你只需要按照对应的index来获取想要的数据就可以了。")]),a._v(" "),e("p",[a._v("至此，就完成了SDK的基础使用，如果需要更多支持可以参照如下示例：")]),a._v(" "),e("p",[a._v("监听设备的进出状态：")]),a._v(" "),e("div",{staticClass:"language-objective-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// 如果设备8秒内没有数据更新，此设备被认为是已经消失，消失的设备将会在此回调，此方法每5秒一个周期，\n- (void)minewBeaconManager:(MinewBeaconManager *)manager disappearBeacons:(NSArray<MinewBeacon *> *)beacons\n{\n    NSLog(@"---disappear beacons:%@", beacons);\n}\n\n// 第一次被扫描到的或者消失后重新被扫描到的设备被认为是新出现设备，新出现的设备将会在此回调，此方法每3秒一个周期。\n- (void)minewBeaconManager:(MinewBeaconManager *)manager appearBeacons:(NSArray<MinewBeacon *> *)beacons\n{\n    NSLog(@"appear beacons:%@", beacons);\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])]),e("p",[a._v("监听蓝牙模块状态更新")]),a._v(" "),e("p",[a._v("蓝牙状态一共有三种：")]),a._v(" "),e("p",[a._v("BluetoothState：BluetoothStatePowerOn（蓝牙开启），BluetoothStatePowerOff（蓝牙关闭），BluetoothStateUnknown（蓝牙状态未知）")]),a._v(" "),e("div",{staticClass:"language-objective-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// 因用户或者系统改变的蓝牙开关，都能在以下方法监听到：\n- (void)minewBeaconManager:(MinewBeaconManager *)manager didUpdateState:(BluetoothState)state\n{\n    NSLog(@"Bluetooth state:%ld", (long)state);\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("当然，你也可以手动检查蓝牙状态：")]),a._v(" "),e("div",{staticClass:"language-objective-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('BluetoothState state = [aManager checkBluetoothState];\n\nif(state == BluetoothStatePowerOn)\n  NSLog(@"Bluetooth is PowerOn now.");\nelse if ...\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h2",{attrs:{id:"类说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 类说明")]),a._v(" "),e("h3",{attrs:{id:"minewbeacon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minewbeacon","aria-hidden":"true"}},[a._v("#")]),a._v(" MinewBeacon")]),a._v(" "),e("p",[a._v("设备类，每一个设备对应一个此类实例，此类仅有一个方法，通过对应的Index来获取设备的信息：")]),a._v(" "),e("div",{staticClass:"language-objective-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" -(MinewBeaconValue *)getBeaconValue:(BeaconValueIndex)index;\n\n例如获取某个设备实例的UUID：\n  [aBeacon getBeaconValue:BeaconValueIndex_UUID].stringValue;\n\n// 这里是设备数据的对应枚举；\n // !!!:必须按照每个设备的数据类型来获取数据。\ntypedef NS_ENUM(NSInteger, BeaconValueIndex) {\n     // UUID      \n    BeaconValueIndex_UUID = 1,  // stringValue\n    // Major \n    BeaconValueIndex_Major,   // intValue\n    // Minor\n    BeaconValueIndex_Minor,   // intValue\n    // Name\n    BeaconValueIndex_Name,   // stringValue\n    // RSSI\n    BeaconValueIndex_RSSI,   //  intValue\n    // 电池电量\n    BeaconValueIndex_BatteryLevel,  // intValue\n    // 温度，暂时不提供数据\n    BeaconValueIndex_Temperature, \n    // 湿度 ，暂时不提供数据\n    BeaconValueIndex_Humidity, \n    // TxPower\n    BeaconValueIndex_TxPower,  // intValue\n    // 设备当前是否在可扫描的范围内\n    BeaconValueIndex_InRage,  // boolValue\n    // 微信设备Id，（部分设备可获取）\n    BeaconValueIndex_WechatId, // intValue\n};\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br"),e("span",{staticClass:"line-number"},[a._v("29")]),e("br"),e("span",{staticClass:"line-number"},[a._v("30")]),e("br"),e("span",{staticClass:"line-number"},[a._v("31")]),e("br")])]),e("h3",{attrs:{id:"minewbeaconvalue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minewbeaconvalue","aria-hidden":"true"}},[a._v("#")]),a._v(" MinewBeaconValue")]),a._v(" "),e("div",{staticClass:"language-objective-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 设备数据类：MinewBeaconValue，从设备获取的所有数据均得到此类实例，请严格按照对应数据类型获取数据\n\n// 获取整形数据\n@property (nonatomic, readonly, assign) NSInteger intValue;\n\n// 获取浮点型数据\n@property (nonatomic, readonly, assign) float floatValue;\n\n// 获取字符串型数据\n@property (nonatomic, readonly, copy) NSString *stringValue;\n\n// 获取16进制data型数据\n@property (nonatomic, readonly, strong) NSData  *dataValue;\n\n// 获取bool类型数据\n@property (nonatomic, readonly, assign) BOOL boolValue;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br")])]),e("h3",{attrs:{id:"minewbeaconmanager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minewbeaconmanager","aria-hidden":"true"}},[a._v("#")]),a._v(" MinewBeaconManager")]),a._v(" "),e("p",[a._v("设备管理类，用来扫描设备以及更新设备状态等。")]),a._v(" "),e("div",{staticClass:"language-objective-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 设备管理类代理\n@protocol MinewBeaconManagerDelegate <NSObject>\n@optional\n\n// 发现了新的设备，目前以3秒周期，如果没有发现新设备将不会回调\n- (void)minewBeaconManager:(MinewBeaconManager * )manager appearBeacons:(NSArray<MinewBeacon *> *)beacons;\n\n// 如果设备在10秒内没有正常的数据更新，则被视为已经离开扫描范围，此方法会回调。\n- (void)minewBeaconManager:(MinewBeaconManager * )manager disappearBeacons:(NSArray<MinewBeacon *> *)beacons;\n\n// 每1秒回调一次，当前发现的所有设备，如果周围没有Beacon则不会回调\n- (void)minewBeaconManager:(MinewBeaconManager * )manager didRangeBeacons:(NSArray<MinewBeacon *> * )beacons;\n\n@end\n\n// 设备管理类\n@interface MinewBeaconManager : NSObject\n\n// 单例\n+ (MinewBeaconManager  *)sharedInstance;\n\n// 开始扫描设备，uuids参数是设备的UUID字符串数组，enable参数提供后台支持，如果为NO，则当应用进入后台时停止扫描，反之，应用进入后台将切换至后台模式继续扫描。\n- (void)startScan:(NSArray<NSString *> *)uuids backgroundSupport :(BOOL)enable;\n\n// 停止扫描设备\n- (void)stopScan;\n\n// 代理指针\n@property (nonatomic, strong) id <MinewBeaconManagerDelegate> delegate;\n\n@property (nonatomic, readonly, assign) BluetoothState\n\n// 扫描到的所有设备\n@property (nonatomic, readonly, copy) NSArray<MinewBeacon *> *scannedBeacons;\n\n// 当前在范围内的设备\n@property (nonatomic, readonly, copy) NSArray<MinewBeacon *> *inRangeBeacons;\n\n@end\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br"),e("span",{staticClass:"line-number"},[a._v("29")]),e("br"),e("span",{staticClass:"line-number"},[a._v("30")]),e("br"),e("span",{staticClass:"line-number"},[a._v("31")]),e("br"),e("span",{staticClass:"line-number"},[a._v("32")]),e("br"),e("span",{staticClass:"line-number"},[a._v("33")]),e("br"),e("span",{staticClass:"line-number"},[a._v("34")]),e("br"),e("span",{staticClass:"line-number"},[a._v("35")]),e("br"),e("span",{staticClass:"line-number"},[a._v("36")]),e("br"),e("span",{staticClass:"line-number"},[a._v("37")]),e("br"),e("span",{staticClass:"line-number"},[a._v("38")]),e("br"),e("span",{staticClass:"line-number"},[a._v("39")]),e("br")])]),e("h2",{attrs:{id:"change-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#change-log","aria-hidden":"true"}},[a._v("#")]),a._v(" Change log")]),a._v(" "),e("p",[a._v("2016.12.22 流程梳理更明确，针对iOS10规范适配。")]),a._v(" "),e("p",[a._v("2016.9.18 针对苹果审核规范修正。")]),a._v(" "),e("p",[a._v("2016.11.29 添加对新固件的Mac地址数据、温湿度传感器数据的支持。")])])}],!1,null,null,null);t.options.__file="iOS_Beacon_Software_Development_Kit_Guide.md";n.default=t.exports}}]);