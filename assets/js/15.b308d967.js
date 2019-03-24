(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{179:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"io流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#io流","aria-hidden":"true"}},[t._v("#")]),t._v(" IO流")]),t._v(" "),s("p",[t._v("程序以字节为单位进行输入和输出。所有的字节流类都来自InputStream和OutputStream。\n主要有FileInputStream和FileOutputStream。其它类型的字节流以相同的方式使用，它们主要在构建方式上有所不同。")]),t._v(" "),s("p",[t._v("Always Close Streams")]),t._v(" "),s("p",[t._v("字节流只能用于最原始的I / O。\n那么为什么要谈论字节流呢？ 因为所有其他流类型都建立在字节流上。")]),t._v(" "),s("h2",{attrs:{id:"字节流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字节流","aria-hidden":"true"}},[t._v("#")]),t._v(" 字节流")]),t._v(" "),s("p",[t._v("所有的字节流类来自Reader和Writer。和字节流一样，处理文件的字符流是FileReader和FileWriter。")]),t._v(" "),s("p",[t._v("字符流通常是字节流的“包装”。 字符流使用字节流来执行物理I / O，而字符流处理字符和字节之间的转换。 例如，FileReader使用FileInputStream，而FileWriter使用FileOutputStream。")]),t._v(" "),s("p",[t._v("有两个通用字节到字符的“桥”流：InputStreamReader和OutputStreamWriter。 如果没有预先包装的字符流类可以满足您的需求，请使用它们来创建字符流。 网络路径中的套接字课程显示了如何从套接字类提供的字节流中创建字符流。")]),t._v(" "),s("p",[s("em",[t._v("面向行的IO")]),t._v("\n字符I / O通常以比单个字符更大的单位出现。 一个常见的单位是行：在末尾有一个行结束符的字符串。 一个行终止符可以是一个回车符/换行符序列（“\\ r \\ n”），一个回车符（“\\ r”）或一个换行符（“\\ n”）。 支持所有可能的行终止符允许程序读取任何广泛使用的操作系统上创建的文本文件。")]),t._v(" "),s("p",[t._v("让我们修改CopyCharacters示例以使用面向行的I / O。 为此，我们必须使用两个我们以前从未见过的类，BufferedReader和PrintWriter。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("BufferedReader inputStream "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPrintWriter outputStream "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    inputStream "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("BufferedReader")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("FileReader")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"xanadu.txt"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    outputStream "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("PrintWriter")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("FileWriter")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"characteroutput.txt"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    String l"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" inputStream"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("readLine")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        outputStream"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("println")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputStream "),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        inputStream"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("close")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outputStream "),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        outputStream"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("close")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"缓存流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存流","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存流")]),t._v(" "),s("p",[t._v("到目前为止，我们看到的大多数示例都使用无缓冲的I / O。 这意味着每个读取或写入请求都由底层操作系统直接处理。 这可能会使程序效率低得多，因为每个这样的请求通常会触发磁盘访问，网络活动或其他相对昂贵的操作。")]),t._v(" "),s("p",[t._v("为了减少这种开销，Java平台实现了缓冲的I / O流。 缓冲输入流从称为缓冲区的存储区中读取数据; 本机输入API仅在缓冲区为空时调用。 同样，缓冲输出流将数据写入缓冲区，并且仅在缓冲区满时调用本机输出API。")]),t._v(" "),s("p",[t._v("程序可以使用我们已经使用过多次的包装方式将未缓冲的流转换为缓冲流，其中未缓冲的流对象被传递给缓冲流类的构造函数。 以下是如何修改CopyCharacters示例中的构造函数调用以使用缓冲I / O的方法：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("inputStream "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("BufferedReader")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("FileReader")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"xanadu.txt"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\noutputStream "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("BufferedWriter")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("FileWriter")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"characteroutput.txt"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("有四个缓冲流类用于包装未缓冲的流：BufferedInputStream和BufferedOutputStream创建缓冲的字节流，而BufferedReader和BufferedWriter创建缓冲的字符流。")]),t._v(" "),s("p",[s("em",[t._v("冲洗缓冲流")]),t._v("\n在临界点写出缓冲区通常是有意义的，无需等待填充。 这被称为冲洗缓冲区。")]),t._v(" "),s("p",[t._v("一些缓冲输出类支持autoflush，由可选的构造函数参数指定。 启用自动刷新功能后，某些关键事件会导致刷新缓冲区。 例如，一个autoflush PrintWriter对象在每次调用println或format时刷新缓冲区。 有关这些方法的更多信息，请参阅格式。")]),t._v(" "),s("p",[t._v("要手动刷新流，请调用其刷新方法。 flush方法在任何输出流上都有效，但除非流被缓冲，否则无效。")]),t._v(" "),s("h2",{attrs:{id:"扫描和格式化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扫描和格式化","aria-hidden":"true"}},[t._v("#")]),t._v(" 扫描和格式化")]),t._v(" "),s("p",[t._v("编程I / O通常涉及翻译人类喜欢使用的整齐格式化数据。 为了协助你完成这些杂事，Java平台提供了两个API。 扫描仪API将输入分解为与数据位关联的单个令牌。 格式化API将数据组装成格式良好，可读的格式。")]),t._v(" "),s("p",[s("em",[t._v("Scanning")]),t._v("\n默认情况下，扫描器使用white space去区分tokens。（white space包括空格，制表符和行结束符）")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("Scanner s "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    s "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Scanner")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("BufferedReader")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("FileReader")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"xanadu.txt"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("hasNext")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        System"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("println")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("next")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        s"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("close")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v('可以使用不同的格式区分\ns.useDelimiter(",\\s*");')]),t._v(" "),s("p",[t._v("Translating Individual Tokens\ns.hasNextDouble()")]),t._v(" "),s("p",[s("em",[t._v("Formatting")])]),t._v(" "),s("h2",{attrs:{id:"命令行io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行io","aria-hidden":"true"}},[t._v("#")]),t._v(" 命令行IO")]),t._v(" "),s("p",[t._v("程序通常从命令行运行，并在命令行环境中与用户交互。 Java平台通过两种方式支持这种交互：通过标准流和控制台")]),t._v(" "),s("p",[s("em",[t._v("标准流")]),t._v("\n标准流是许多操作系统的功能。默认情况下，它们从键盘读取输入并将输出写入显示器。它们还支持文件和程序之间的I / O，但该功能由命令行解释程序控制，而不是程序。")]),t._v(" "),s("p",[t._v("Java平台支持三种标准流：标准输入，通过System.in访问;标准输出，通过System.out访问;和标准错误，通过System.err访问。这些对象是自动定义的，不需要打开。标准输出和标准误差都是输出;分别具有错误输出允许用户将常规输出转移到文件并仍然能够读取错误消息。有关更多信息，请参阅命令行解释器的文档。")]),t._v(" "),s("p",[t._v("您可能期望标准数据流是字符流，但出于历史原因，它们是字节流。 System.out和System.err被定义为PrintStream对象。虽然它在技术上是一个字节流，但PrintStream使用内部字符流对象来模拟字符流的许多特征。")]),t._v(" "),s("p",[t._v("相反，System.in是一个没有字符流特征的字节流。要将标准输入用作字符流，请在InputStreamReader中包装System.in。")]),t._v(" "),s("p",[t._v("InputStreamReader cin = new InputStreamReader（System.in）;")]),t._v(" "),s("p",[s("em",[t._v("The Console")]),t._v("\n控制台是标准数据流的更高级替代品。这是Console类型的单个预定义对象，具有标准流提供的大部分功能，还有其他功能。控制台对安全密码输入特别有用。 Console对象还通过其读写器方法提供真正的字符流的输入和输出流。")]),t._v(" "),s("p",[t._v("在程序可以使用控制台之前，它必须尝试通过调用System.console（）来检索控制台对象。如果Console对象可用，则此方法返回它。如果System.console返回NULL，则不允许控制台操作，因为操作系统不支持它们或者因为程序是在非交互式环境中启动的。")]),t._v(" "),s("p",[t._v("Console对象通过其readPassword方法支持安全密码输入。这种方法有两种方式来帮助保护密码输入。首先，它抑制回声，所以密码在用户的屏幕上不可见。其次，readPassword返回一个字符数组，而不是一个String，所以密码可以被覆盖，一旦不再需要它就从内存中移除。")]),t._v(" "),s("h2",{attrs:{id:"data-streams"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-streams","aria-hidden":"true"}},[t._v("#")]),t._v(" Data Streams")]),t._v(" "),s("p",[t._v("数据流支持基本数据类型值（布尔型，char，byte，short，int，long，float和double）的二进制I / O以及String值。 所有数据流都实现DataInput接口或DataOutput接口。 本节重点介绍这些接口中最广泛使用的实现，DataInputStream和DataOutputStream。")]),t._v(" "),s("p",[t._v("另请注意，DataStream中的每个专用写入都与相应的专用读取完全匹配。 程序员应确保输出类型和输入类型以这种方式匹配：输入流包含简单的二进制数据，没有任何内容可以指示单个值的类型，或者它们在流中的开始位置。")]),t._v(" "),s("p",[t._v("DataStreams使用一种非常糟糕的编程技术：它使用浮点数来表示货币值。 一般来说，浮点对精确的值不好。 这对小数部分尤其不利，因为常用值（如0.1）没有二进制表示。")]),t._v(" "),s("p",[t._v("用于货币值的正确类型是java.math.BigDecimal。 不幸的是，BigDecimal是一个对象类型，所以它不适用于数据流。 但是，BigDecimal将与对象流一起工作，这将在下一节中介绍。")]),t._v(" "),s("h2",{attrs:{id:"object-streams"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-streams","aria-hidden":"true"}},[t._v("#")]),t._v(" Object Streams")]),t._v(" "),s("p",[t._v("就像数据流支持原始数据类型的I / O一样，对象流支持对象的I / O。大多数（但不是全部）标准类支持其对象的序列化。那些实现了标记接口Serializable的。")]),t._v(" "),s("p",[t._v("对象流类是ObjectInputStream和ObjectOutputStream。这些类实现了ObjectInput和ObjectOutput，它们是DataInput和DataOutput的子接口。这意味着数据流中涵盖的所有基本数据I / O方法也都在对象流中实现。所以对象流可以包含基本和对象值的混合。")]),t._v(" "),s("p",[t._v("writeObject和readObject方法使用简单，但它们包含一些非常复杂的对象管理逻辑。这对于像Calendar这样只封装原始值的类来说并不重要。但是许多对象包含对其他对象的引用。如果readObject要从流中重建对象，则必须能够重构所引用的原始对象的所有对象。这些附加对象可能有自己的引用，等等。在这种情况下，writeObject遍历整个对象引用的网页，并将该网页中的所有对象写入流中。因此，writeObject的单个调用可能会导致大量对象被写入流中。")])])}],!1,null,null,null);e.options.__file="io.md";a.default=e.exports}}]);