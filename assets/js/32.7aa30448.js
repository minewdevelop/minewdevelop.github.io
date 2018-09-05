(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{201:function(a,s,n){a.exports=n.p+"assets/img/design.48a5b3ec.png"},202:function(a,s,n){a.exports=n.p+"assets/img/addframework.0b887314.png"},203:function(a,s,n){a.exports=n.p+"assets/img/frameworkadded.219650ea.png"},204:function(a,s,n){a.exports=n.p+"assets/img/bluetoothbackground.f0d91607.png"},205:function(a,s,n){a.exports=n.p+"assets/img/bluetoothdescription.7ceeb2e7.png"},211:function(a,s,n){"use strict";n.r(s);var r=[function(){var a=this,s=a.$createElement,r=a._self._c||s;return r("div",{staticClass:"content"},[r("h2",{attrs:{id:"minewtrackerkit说明文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#minewtrackerkit说明文档","aria-hidden":"true"}},[a._v("#")]),a._v(" MinewTrackerKit说明文档")]),a._v(" "),r("p",[a._v("本套SDK仅支持基于的nordic52芯片寻物器，"),r("strong",[a._v("与过去的51芯片不兼容")]),a._v("。请仔细阅读此文档以便尽快上手开发。")]),a._v(" "),r("p",[r("strong",[a._v("兼容性说明：过去用过MinewFinderSDK的开发者请注意：MinewFinder与MTTrackerKit互相不兼容，切不可用于同一个项目。")])]),a._v(" "),r("h3",{attrs:{id:"前期工作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前期工作","aria-hidden":"true"}},[a._v("#")]),a._v(" 前期工作")]),a._v(" "),r("p",[a._v("此开发套件和过去的MinewFinder有些类似。我们在之前的基础上全面更新了加密算法和设备端稳定性，性能实际表现远远高于51版本的Tracker。")]),a._v(" "),r("p",[a._v("MTTrackerManager为设备管理类，在APP运行时始终是单例。MTTracker是设备实例类，此套件会为每一个设备生成一个MTTracker实例以便于对监听设备和操作设备。")]),a._v(" "),r("p",[a._v("整体设计思路如下图所示：")]),a._v(" "),r("p",[r("img",{attrs:{src:n(201),alt:"设计说明"}})]),a._v(" "),r("p",[a._v("*MTTrackerManager：*设备管理类，可以扫描周围的Tracker设备，并且可以连接它们，校验它们等。")]),a._v(" "),r("p",[a._v("MTTracker：设备实例类，当Manager发现一个物理设备时，Manager会生成一个Tracker实例，这个实例就对应一个物理设备。")]),a._v(" "),r("h3",{attrs:{id:"开始上手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开始上手","aria-hidden":"true"}},[a._v("#")]),a._v(" 开始上手")]),a._v(" "),r("h5",{attrs:{id:"开发环境："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发环境：","aria-hidden":"true"}},[a._v("#")]),a._v(" 开发环境：")]),a._v(" "),r("ul",[r("li",[a._v("Xcode9+，当前SDK使用Xcode9编译，请使用Xcode9及以上版本进行开发；")]),a._v(" "),r("li",[a._v("iOS8，限制最低系统版本为iOS8；")])]),a._v(" "),r("h5",{attrs:{id:"导入到工程："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#导入到工程：","aria-hidden":"true"}},[a._v("#")]),a._v(" 导入到工程：")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("将开发套件的framework文件：MTTrackit.framework拷贝到项目工程目录下，然后添加到工程中，target为当前的工程，然后点“Add”，如下图所示：")]),a._v(" "),r("p",[r("img",{attrs:{src:n(202),alt:"添加framework"}})])])]),a._v(" "),r("p",[a._v("​    依次找到：“Target” -> General -> Embedded Binaries，点击下面的“+”，继续点击“Add Other”将MTTrackit.framework文件添加进来。同样的，也需要添加到 ”Linked Frameworks and Libraries“，添加完应该如下图：")]),a._v(" "),r("p",[r("img",{attrs:{src:n(203),alt:"frameworkadded"}})]),a._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[a._v("由于APP需要在后台时也能正常响应Tracker的事件，因此需要开启相关的后台蓝牙权限。如下图：")]),a._v(" "),r("p",[r("img",{attrs:{src:n(204),alt:""}})])]),a._v(" "),r("li",[r("p",[a._v("*如果使用Swift开发，需要添加一个Objective C BridgingHeader .h文件（此处不再赘述），并且在此文件添加：import ，如果使用Objective C进行开发，在需要的文件的顶端添加：import")])]),a._v(" "),r("li",[r("p",[a._v('!!!在iOS10及以上版本，苹果对蓝牙APi添加了权限限制，你需要在工程的info.plist文件里添加一项字符串：Privacy - Bluetooth Peripheral Usage Description - "你的使用描述"。如下图所示：')]),a._v(" "),r("p",[r("img",{attrs:{src:n(205),alt:"bluetoothdescription"}})])])]),a._v(" "),r("h4",{attrs:{id:"开始开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开始开发","aria-hidden":"true"}},[a._v("#")]),a._v(" 开始开发")]),a._v(" "),r("h5",{attrs:{id:"扫描设备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#扫描设备","aria-hidden":"true"}},[a._v("#")]),a._v(" 扫描设备")]),a._v(" "),r("p",[a._v("首先需要获取到MTTrackerManager的单例，然后检查手机当前的蓝牙状态，接着就可以进行设备扫描了。")]),a._v(" "),r("div",{staticClass:"language-objective-c line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("// 获取Manager单例\nMTTrackerManager *manager = [MTTrackerManager sharedInstance];\n\n// 手机端当前的蓝牙开关状态\nif(manager.bleState == Poweron) {\n     // 开始进行设备扫描\n    [manager startScan:^(NSArray<MTTracker *> *trackers){\n        // 当检测到周围的设备后，此block会回调。\n    }];   \n}\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br")])]),r("p",[a._v("PS：trackers数组里包含的只有"),r("strong",[a._v("未绑定的设备")]),a._v("（下文将会提供绑定相关说明）。")]),a._v(" "),r("h5",{attrs:{id:"绑定校验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#绑定校验","aria-hidden":"true"}},[a._v("#")]),a._v(" 绑定校验")]),a._v(" "),r("p",[a._v("某个Tracker只有被绑定了才能正常使用，我们建议进行绑定操作时，Tracker与手机的距离不要超过10cm。")]),a._v(" "),r("p",[a._v("基于以前的经验，我们使用了全新的加密算法来保证手机和设备之间通信的安全性。另外，Tracker在出厂时默认密码为空，每个设备在绑定时都需要一个密码，一旦绑定成功，这个Tracker将只接受来自主人手机的连接。")]),a._v(" "),r("div",{staticClass:"language-objective-c line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('/*\n  manager: MTTrackerManager单例\n*/\n// 设置密码,长度必须是8位,可以是大小写字母，数字，特殊符号。\nmanager.password = @"********";\n\n// 开始进行设备绑定验证操作\n[manager bindingVerify:aTracker completion:^(BOOL success, NSError *error) {\n     // 如果绑定验证成功了，tracker将会被自动添加到manager的bindTrackers数组里，\n     // 否则说明此设备因为种种原因无法成功绑定。\n}];\n')])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br")])]),r("p",[a._v("PS：无法绑定的设备是不能正常使用的。")]),a._v(" "),r("h5",{attrs:{id:"解绑设备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解绑设备","aria-hidden":"true"}},[a._v("#")]),a._v(" 解绑设备")]),a._v(" "),r("p",[a._v("如果用户丢失了某个Tracker，或者想把Tracker送给别人。就需要进行解绑操作，严格的来说，除非Tracker丢失了。其它情况下都应该在保持设备与手机连接的状态下进行解绑操作。这是由于Tracker内部记录了当前主人的密码，解绑时需要擦除密码才能保证下一次的正常使用。")]),a._v(" "),r("div",{staticClass:"language-objective-c line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('/*\n  manager: MTTrackerManager单例\n*/\n// 解除设备绑定\n\n// 你想要解除绑定设备的mac地址\nNSString *mac = @"acd498765432";\n\n// 解除设备绑定\n[manager unbindTracker:mac completion:^(BOOL success, NSError *error) {\n    // 同样的，操作成功后 success为YES，否则为NO。\n}];\n\n')])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br")])]),r("h5",{attrs:{id:"获取设备信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取设备信息","aria-hidden":"true"}},[a._v("#")]),a._v(" 获取设备信息")]),a._v(" "),r("p",[a._v("你可以通过MTTracker实例获取到对应物理设备的信息，例如蓝牙名称，mac地址，rssi等数据。")]),a._v(" "),r("div",{staticClass:"language-objective-c line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("// aTracker MTTracker实例\n\nNSString *mac = aTracker.mac; // mac 地址\nNSString *name = aTracker.name; // 蓝牙名称\nNSInteger rssi = aTraker.rssi;   // 信号强度\nNSInteger battery = aTracker.battery; // 电池 0～100\nConnection status = aTracker.connection; // 设备当前的连接状态\nModelType model = aTracker.model;    // 设备型号\nDistance dis = aTracker.distance;    // 距离信息\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br")])]),r("h5",{attrs:{id:"呼叫设备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#呼叫设备","aria-hidden":"true"}},[a._v("#")]),a._v(" 呼叫设备")]),a._v(" "),r("p",[a._v("通过我们提供的APi，可以对设备进行呼叫，当然是在设备保持连接的状态下。")]),a._v(" "),r("div",{staticClass:"language-objective-c line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('// aTracker MTTracker实例\n\n// 当ring 为YES的时候是让设备响铃，为NO的时候是停止设备响铃。\nBOOL ring = YES;\n\n// 切换设备响铃状态\n[aTracker switchBellStatus:ring completion:^(BOOL success, NSError *error) {\n    if (success) {\n       NSLog(@"响铃状态切换成功。");   \n    }\n}];\n')])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br")])]),r("h5",{attrs:{id:"配置设备断开时的事件处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置设备断开时的事件处理","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置设备断开时的事件处理")]),a._v(" "),r("p",[a._v("Tracker在断开时会有相应的事件处理，比如断开响铃以告知用户等。")]),a._v(" "),r("div",{staticClass:"language-objective-c line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('// aTracker MTTracker实例\n\n// 为YES表示Tracker断开时将会响铃，否则不响铃\nBOOL alert = YES;\n\n[aTracker writeLossAlert:alert completion:^(BOOL success, NSError *error) {\n   \n    if (success) {\n       NSLog(@"成功配置断开事件处理。");   \n    }\n}];]\n')])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br")])]),r("h5",{attrs:{id:"接受来自设备的事件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接受来自设备的事件","aria-hidden":"true"}},[a._v("#")]),a._v(" 接受来自设备的事件")]),a._v(" "),r("p",[a._v("手机可以接受来自设备的事件，需要做好相关监听。")]),a._v(" "),r("div",{staticClass:"language-objective-c line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('// aTracker MTTracker实例\n[aTracker didReceive:^(Receiving rec) {\n    \n    // Tracker上的按钮被按下，\n    // 你可以在这里处理拍照，手机端报警等操作。\n    if(rec == ReceivingButtonPushed) {\n       NSLog(@"按下了设备上的按钮。"); \n    }\n}];\n\n// 监听设备连接状态变化\n[aTracker didConnectionChange:^(Connection con){\n    switch(con){\n        case ConnectionConnecting:\n            NSLog(@"正在连接到Tracker");\n            break;\n        case ConnectionConnected:\n            NSLog(@"Tracker已经连接");\n            break;\n        case ConnectionDisconnected:\n            NSLog(@"Tracker已经断开连接");\n            break;\n    }; \n}];\n\n// 监听设备数据更新\n[aTracker didValueUpdate:^(){\n    /*\n      设备的属性或状态更新了，你可以刷新UI界面了。\n    */\n}];\n')])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br"),r("span",{staticClass:"line-number"},[a._v("14")]),r("br"),r("span",{staticClass:"line-number"},[a._v("15")]),r("br"),r("span",{staticClass:"line-number"},[a._v("16")]),r("br"),r("span",{staticClass:"line-number"},[a._v("17")]),r("br"),r("span",{staticClass:"line-number"},[a._v("18")]),r("br"),r("span",{staticClass:"line-number"},[a._v("19")]),r("br"),r("span",{staticClass:"line-number"},[a._v("20")]),r("br"),r("span",{staticClass:"line-number"},[a._v("21")]),r("br"),r("span",{staticClass:"line-number"},[a._v("22")]),r("br"),r("span",{staticClass:"line-number"},[a._v("23")]),r("br"),r("span",{staticClass:"line-number"},[a._v("24")]),r("br"),r("span",{staticClass:"line-number"},[a._v("25")]),r("br"),r("span",{staticClass:"line-number"},[a._v("26")]),r("br"),r("span",{staticClass:"line-number"},[a._v("27")]),r("br"),r("span",{staticClass:"line-number"},[a._v("28")]),r("br"),r("span",{staticClass:"line-number"},[a._v("29")]),r("br"),r("span",{staticClass:"line-number"},[a._v("30")]),r("br"),r("span",{staticClass:"line-number"},[a._v("31")]),r("br")])]),r("h5",{attrs:{id:"重启app后的相关处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重启app后的相关处理","aria-hidden":"true"}},[a._v("#")]),a._v(" 重启APP后的相关处理")]),a._v(" "),r("p",[a._v("你可能会发现，SDK的操作只涉及到内存数据，如果APP被Kill掉，之前的绑定数据什么的就失效了。所以需要你自行做数据永久化存储，比如当前用户的绑定密码，每个已绑定设备的Mac地址等。")]),a._v(" "),r("p",[a._v("当然，我们也提供了一些APi用于APP恢复后的相关操作。")]),a._v(" "),r("p",[a._v("以下代码均在APP重新运行时处理的。")]),a._v(" "),r("div",{staticClass:"language-objective-c line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('// 获取一个已绑定Tracker的实例\n/*\n  SDK会智能解析mac地址并生成一个MTTracker实例，如果Tracker在手机附近正常工作。SDK会自动处理连接配置等的相关操作。\n  唯一需要注意的就是需要保证所提供的mac地址是已绑定的，就是使用过 “- (void)bindingVerify:(MTTracker *)tracker completion:(void(^)(BOOL success, NSError *error))handler;” 方法并且获得了成功的回调。\n  在获取到MTTracker实例的同时，此Tracker实例也被添加到BindTrackers数组里。\n*/\nMTTracker *bindTracker = [aManager addTracker:@"xxxxxxxxxxxx"];\n')])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br")])]),r("h5",{attrs:{id:"关于用户切换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于用户切换","aria-hidden":"true"}},[a._v("#")]),a._v(" 关于用户切换")]),a._v(" "),r("p",[a._v("有的时候可能出现当前用户注销自己的登录，然后登入另外一个账号，此时就需要从Manager中移除已经绑定的设备，然后加载新用户的已绑定设备。")]),a._v(" "),r("div",{staticClass:"language-objective-c line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('// 移除当前用户的绑定设备\n[aMTTrackerManager removeAllTrackers];\n\n// 设置新用户的绑定密码 \naMTTrackerManager.password = @"********"; \n\n/*\n     此处加载新用户的绑定设备Mac地址，假设为数组：bindMacs\n*/\nfor(NSinteger i = 0; i < bindMacs.count; i ++) {\n   // tracker就是新用户的已绑定设备\n   MTTracker *tracker = [aMTTrackerManager addTracker:bindMacs[i]]; \n}\n')])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br")])]),r("h4",{attrs:{id:"高级操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#高级操作","aria-hidden":"true"}},[a._v("#")]),a._v(" !!!高级操作")]),a._v(" "),r("p",[a._v("此部分APi属于高级APi，我们把这部分开放给高级开发。除非你明白这些操作的将会导致什么样子的结果，否则不要轻易尝试。")]),a._v(" "),r("div",{staticClass:"language-objective-c line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("// aTracker MTTracker实例\n\n// 修改设备的断开延迟。\n\n// 这个参数指的是在断开响铃的状态下，设备端将等待delay秒后开始发出声音。\n// 需要注意，它的范围是1s-7s，如果设置的数据太小将会出现误报的问题。\nNSInteger delay = 7;\n\n// 写入断开延迟\n[aTracker writeLossDelay:delay completion:^(BOOL success, NSError *error) {\n    \n    if(success) {  // 成功写入到设备。\n        \n    }\n}];\n\n// 这个参数指的是设备的断开距离，设备将在配置的距离断开连接。\n// 例如：如果配置的是“远”，设备将在30米左右断开连接。“中”：将在20米左右，“近”，将在10米左右。\n// 需要注意的是，上述30米/20米/10米是举例值，实际使用中受限于环境\n// 有远/中/近三档可选，默认情况下是“远”。\nDistanceLevel level = DistanceLevelFar;\n[aTracker writeLossDistance:level completion:^(BOOL success, NSError *error) {\n    if (success) {   // 成功写入到设备\n            \n    }\n}];\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br"),r("span",{staticClass:"line-number"},[a._v("14")]),r("br"),r("span",{staticClass:"line-number"},[a._v("15")]),r("br"),r("span",{staticClass:"line-number"},[a._v("16")]),r("br"),r("span",{staticClass:"line-number"},[a._v("17")]),r("br"),r("span",{staticClass:"line-number"},[a._v("18")]),r("br"),r("span",{staticClass:"line-number"},[a._v("19")]),r("br"),r("span",{staticClass:"line-number"},[a._v("20")]),r("br"),r("span",{staticClass:"line-number"},[a._v("21")]),r("br"),r("span",{staticClass:"line-number"},[a._v("22")]),r("br"),r("span",{staticClass:"line-number"},[a._v("23")]),r("br"),r("span",{staticClass:"line-number"},[a._v("24")]),r("br"),r("span",{staticClass:"line-number"},[a._v("25")]),r("br"),r("span",{staticClass:"line-number"},[a._v("26")]),r("br")])])])}],e=n(0),t=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);t.options.__file="iOS_MinewTrackerKit_Software_Development_Kit_Guide.md";s.default=t.exports}}]);