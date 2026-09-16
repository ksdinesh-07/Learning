# Cascading Style Sheets (CSS)

    ## 1. Introduction

        CSS (Cascading Style Sheets) is a style sheet language used to control the presentation and appearance of HTML documents.

        HTML defines the structure and content of a webpage, while CSS defines how that content should look and be arranged.

        For example:

            <h1>Hello World</h1>
            <p>This is my webpage.</p>

        The HTML defines the content.

            CSS can be used to change its appearance:

            h1 {
                color: blue;
                font-size: 40px;
            }

            p {
                color: red;
            }

        Therefore:

            HTML       ---> Structure and Content
            CSS        ---> Presentation and Layout
            JavaScript ---> Behavior and Logic

    ## History Before CSS

        To understand CSS properly, it is useful to understand how the Web developed.

        Before the World Wide Web, computers mainly exchanged information using different network technologies, applications, and document formats. There was no universal system that allowed people to easily navigate between interconnected documents using hyperlinks.

        In 1989, Tim Berners-Lee, proposed the idea that eventually became the World Wide Web.

        The Web was based on several important technologies:

            HTML
            HTTP
            URL
            Web Browser
            Web Server

        These technologies formed the foundation of the modern Web.


    ## HTML Came Before CSS

        HTML was introduced before CSS.

        HTML stands for:

        HyperText Markup Language

        HTML was primarily designed to describe the structure of documents.

        For example:

        <h1>My Website</h1>

        <p>Welcome to my website.</p>

        <a href="https://example.com">Visit Website</a>

        The browser can understand the meaning of these elements:

        <h1> → Heading
        <p>  → Paragraph
        <a>  → Hyperlink

        However, as websites became more complex, developers wanted greater control over their presentation.

        They wanted to control:

        Colors
        Fonts
        Text sizes
        Spacing
        Backgrounds
        Borders
        Alignment
        Layout
        Positioning

        This created the need for a separate styling system.

    ## Why Was CSS Introduced?

        Before CSS became widely used, presentation information could be mixed with HTML.

        For example, older HTML allowed presentation-oriented elements such as:

        <font color="red">Hello</font>

        and:

        <center>Hello</center>

        This approach became difficult to maintain.

        Imagine having hundreds of elements on a webpage. If every element contains its own styling information, changing the design requires modifying many HTML elements.

        CSS solved this problem by separating content/structure from presentation.

        Instead of:

        <p style="color: red;">Hello</p>
        <p style="color: red;">Welcome</p>
        <p style="color: red;">Good Morning</p>

        CSS allows us to write:

        <p>Hello</p>
        <p>Welcome</p>
        <p>Good Morning</p>

        and:

        p {
            color: red;
        }

        Now the same rule can apply to all matching paragraphs.

        Therefore, one of the main purposes of CSS is:

            To separate the presentation of a document from its structure and content.
        
    ## Who Introduced CSS?

        CSS was originally proposed in 1994 by Håkon Wium Lie.

        He worked with Bert Bos on the development of CSS.

        The development of CSS was later standardized through the World Wide Web Consortium (W3C).

        Important people and organizations:

            World Wide Web
                ↓
            Tim Berners-Lee

            CSS
                ↓
            Håkon Wium Lie
                +
            Bert Bos

            Web Standards
                ↓
            W3C
    ## What Does CSS Stand For?

        CSS stands for:

            Cascading Style Sheets

            It is a style sheet language.

        Each part of the name has a meaning.

        ## Cascading

            "Cascading" refers to the system CSS uses to determine which styles should be applied when multiple rules affect the same element.

            For example:

                p {
                    color: red;
                }

                p {
                    color: blue;
                }

                Both rules target the same paragraph.

                CSS has rules for determining which declaration takes precedence.


        ## Style

            CSS controls the visual presentation of HTML elements.

            For example:

                h1 {
                    color: blue;
                    font-size: 40px;
                }

                Here CSS controls:

                    Text color
                    Font size

            CSS can be stored in a separate stylesheet.

            For example:

                style.css ---> file name

                HTML can then connect the stylesheet using:

                <link rel="stylesheet" href="style.css">

    ## CSS Rule

        The basic building block of CSS is a CSS rule.

        Example:

                p {
                    color: red;
                }

                A CSS rule contains:

                p ---> Selector

                color ---> Property

                red ---> Value

                The complete structure is:

                    selector {
                        property: value;
                    }

    ## Selector

        A selector identifies the HTML elements that a CSS rule should apply to.

        Example:

            p {
                color: red;
            }

            Here:

                p ---> Selector

        The browser finds all <p> elements and applies the rule.

        HTML:

            <p>Hello</p>
            <p>Welcome</p>

        CSS:

            p {
                color: red;
            }

        Both paragraphs will receive the specified color.

    ## Property

        A property describes what aspect of the element we want to change.

        Example:

            p {
                color: red;
            }

        Here:

            color ---> Property

        Other CSS properties include:

            font-size
            background-color
            margin
            padding
            width
            height
            border
            display

    ## Value

        A value specifies what the property should be set to.

        Example:

            p {
                color: red;
            }

            Here:

            red ---> Value

            Another example:

                p {
                    font-size: 20px;
                }

            Here:

                font-size ---> Property
                20px      ---> Value

    ## CSS Declaration

        A property and its value together form a declaration.

        Example:

            color: red;

            Therefore:

                color: red;
                └───┬───┘
                Declaration

            A CSS rule can contain multiple declarations:

                h1 {
                    color: blue;
                    font-size: 40px;
                    background-color: yellow;
                }

    ## Three ways to add CSS

        CSS can be added to HTML in three common ways.

        ### Inline CSS

            CSS can be written directly inside an HTML element using the style attribute.

                <h1 style="color: blue;">Hello</h1>

            This is called inline CSS.

        ### Internal CSS

            CSS can be written inside the <style> element in an HTML document.

            <!DOCTYPE html>
            <html>
            <head>

                <style>
                    h1 {
                        color: blue;
                    }
                </style>

            </head>

            <body>

                <h1>Hello</h1>

            </body>
            </html>

            This is called internal CSS.

        ### External CSS

            CSS can be stored in a separate .css file.

            HTML

                <!DOCTYPE html>
                <html>
                <head>

                    <link rel="stylesheet" href="style.css">

                </head>

                <body>

                    <h1>Hello</h1>

                </body>
                </html>

            style.css

                h1 {
                    color: blue;
                }

            This is called external CSS.

            External CSS is commonly preferred for larger projects because it keeps HTML and CSS separated.

    ## How a Browser Processes CSS

        When a browser loads a webpage, it needs to process HTML and CSS before displaying the final page.

        A simplified process is:

            HTML File
                ↓
            HTML Parser
                ↓
            DOM

            At the same time:

            CSS File
                ↓
            CSS Parser
                ↓
            CSSOM

            Then:

            DOM + CSSOM
                ↓
            Render Tree
                ↓
            Layout
                ↓
            Paint
                ↓
            Compositing
                ↓
            Displayed on Screen

        ### What Is the DOM?

            DOM stands for:

            Document Object Model

            The browser converts HTML into a tree-like structure.

            For example:

                <body>
                    <h1>Hello</h1>
                    <p>Welcome</p>
                </body>

            can conceptually be represented as:

                body
                ├── h1
                │   └── "Hello"
                │
                └── p
                    └── "Welcome"

            The DOM allows the browser and JavaScript to work with the elements of the document.

            CSS selectors are used to identify elements in this structure for styling.

        ### What Is the CSSOM?

            CSSOM stands for:

            CSS Object Model

            The browser parses CSS and creates a representation of the CSS rules.

            For example:

                h1 {
                    color: blue;
                }

            The browser needs to understand:

                Selector → h1
                Property → color
                Value    → blue

            The CSSOM represents CSS information in a form the browser can use during rendering.

        ### What Is the Render Tree?

            The browser combines information from the DOM and CSSOM to determine what should be rendered.

            Conceptually:

                DOM
                +
                CSSOM
                ↓
                Render Tree

            The render tree contains the information needed to determine the visual representation of the page.

        ### Layout

            After determining which elements should be rendered, the browser calculates their positions and sizes.

            This stage is commonly called layout.

            For example, the browser calculates:

            Element width
            Element height
            Element position
            Margin
            Padding

            This allows the browser to determine where elements should appear on the screen.

        ### Paint

            After layout, the browser needs to draw the visual elements.

            This includes things such as:

            Text
            Colors
            Backgrounds
            Borders
            Images
            Shadows

            This stage is commonly called painting.

        ### Browser Engines

            Different browsers use different browser engines.

            Some major examples are:

                -------------------------------------------------------
                Browser 	    Rendering Engine	 JavaScript Engine
                -------------------------------------------------------
                Chrome          	Blink               	V8
                Firefox	            Gecko	           SpiderMonkey
                Safari	            WebKit	          JavaScriptCore

            These engines are responsible for processing web technologies and rendering webpages.

    ## CSS Selector

        A CSS selector is used to target HTML elements that we want to style.

        For example:

            p {
                color: blue;
            }

            Here:

            p ---> Selector
            color ---> Property
            blue ---> Value

        The selector tells the browser:

            "Find the HTML elements that match this pattern and apply these styles to them."

        A CSS rule can contain multiple declarations:

            h1 {
                color: blue;
                font-size: 40px;
                text-align: center;
            }

        ### Type Selector

            A type selector targets HTML elements based on their element name.

            Example:

                p {
                    color: red;
                }

            HTML:

                <p>Hello</p>
                <p>Welcome</p>

            The selector p matches both <p> elements.

            Another example:

                h1 {
                    color: blue;
                }

            This targets all <h1> elements.

            Syntax

                element-name {
                    property: value;
                }

            Examples:

                h1 { }
                p { }
                div { }
                button { }

        ### Universal Selector

            The universal selector is represented by *.

            It targets all elements.

                * {
                    margin: 0;
                }

            This rule applies to all elements on the page.

            Example:

                <h1>Hello</h1>
                <p>Welcome</p>
                <div>Content</div>
                <button>Click</button>

            The * selector targets:

                h1
                p
                div
                button

                Syntax

                    * {
                        property: value;
                    }

        ### Class Selector

            A class selector targets elements that have a particular class attribute.

            HTML:

                <p class="important">Hello</p>
                <p>Welcome</p>
                <p class="important">CSS</p>

            CSS:

                .important {
                    color: red;
                }

            The . before important indicates that it is a class selector.

            Only the elements with:

                class="important"

            are targeted.

            Syntax

                .class-name {
                    property: value;
                }

        ### ID Selector

            An ID selector targets an element using its id attribute.

            HTML:

                <h1 id="main-heading">Hello</h1>

            CSS:

                #main-heading {
                    color: blue;
                }

            The # indicates an ID selector.

            Syntax

                #id-name {
                    property: value;
                }

            An ID is intended to identify a particular element within a document.

        ### Class vs ID

            Example:

                <p class="text">Paragraph 1</p>
                <p class="text">Paragraph 2</p>

                <p id="special">Paragraph 3</p>

            CSS:

                .text {
                    color: blue;
                }

                #special {
                    color: red;
                }

            The class selector can target multiple elements:

                .text
                ↓
                Paragraph 1
                Paragraph 2

            The ID selector targets the element with that ID:

                #special
                ↓
                Paragraph 3

            
        ### Attribute Selector

            An attribute selector targets elements based on their attributes.

                Example:

                    <input type="text">
                    <input type="password">
                    <input type="email">

                CSS:

                    input[type="text"] {
                        border: 2px solid blue;
                    }

                    This targets only:

                    <input type="text">
                    
        ### Grouping Selectors

            If multiple selectors need the same styles, they can be grouped using a comma.

            Instead of:

                h1 {
                    color: blue;
                }

                h2 {
                    color: blue;
                }

                p {
                    color: blue;
                }

            we can write:

                h1, h2, p {
                    color: blue;
                }

            This is called selector grouping.

        ### Descendant Combinator

            A descendant combinator targets an element that exists somewhere inside another element.

            Example:

                <div>
                    <p>Hello</p>
                </div>

            CSS:

                div p {
                    color: red;
                }

            This means:

                Select every <p> that is inside a <div>.

                The relationship is:

                    div
                    ↓
                    p

                The space between div and p represents the descendant relationship.

        ### Child Combinator

            The child combinator is represented by >.

            It selects elements that are direct children.

            Example:

                <div>
                    <p>Hello</p>

                    <section>
                        <p>Welcome</p>
                    </section>
                </div>

                CSS:

                    div > p {
                        color: red;
                    }

            Only the first <p> is selected because it is a direct child of <div>.

            The second <p> is inside <section>.

        ### Adjacent Sibling Combinator

            The adjacent sibling combinator is represented by +.

            It selects the element that comes immediately after another element.

            Example:

                <h1>Heading</h1>
                <p>Hello</p>
                <p>Welcome</p>

            CSS:

                h1 + p {
                    color: red;
                }

            Only the first paragraph is selected because it immediately follows the <h1>.


        ### General Sibling Combinator

            The general sibling combinator is represented by ~.

            It selects matching sibling elements that appear after another element.

            Example:

                <h1>Heading</h1>
                <p>Paragraph 1</p>
                <p>Paragraph 2</p>

            CSS:

                h1 ~ p {
                    color: red;
                }

            Both paragraphs are selected.

        ### Pseudo-Classes

            A pseudo-class targets an element based on a particular state or condition.

            Pseudo-classes begin with :.

            Example:

                button:hover {
                    background-color: blue;
                }

            This applies when the mouse pointer is over the button.

            Common pseudo-classes include:

                :hover
                :active
                :focus
                :visited
                :first-child
                :last-child
                :nth-child()

            Example:

                input:focus {
                    border: 2px solid blue;
                }

            This styles an input when it receives focus.

        ### Pseudo-Elements

            A pseudo-element allows CSS to style a particular part of an element.

            Pseudo-elements use ::.

            Example:

                p::first-letter {
                    font-size: 30px;
                }

            This styles the first letter of the paragraph.

            Common pseudo-elements include:

                ::before
                ::after
                ::first-letter
                ::first-line
                ::selection

            code

                <p>Once upon a time, in a galaxy far, far away...</p>

                p::first-letter {
                    font-size: 50px;
                    font-weight: bold;
                    color: red;
                }

                Result

                    The browser will look at the paragraph, isolate just the letter "O", and make it gigantic and red, while leaving the rest of the text completely normal.

    ## CSS  Cascade and Specificity

        The cascade is the system CSS uses to determine which styles should be applied when multiple CSS declarations target the same element.

            For example:

                p {
                    color: red;
                }

                p {
                    color: blue;
                }

            Both rules target the same <p> element.

            The browser must determine:

            Which color should be applied?

            CSS uses the cascade, along with concepts such as importance, origin, specificity, and source order, to resolve these conflicts.

        ### Why Is the Cascade Necessary?

            Several rules can potentially target the same element.

                Example:

                    <p class="message" id="special">Hello</p>

                CSS:

                    p {
                        color: blue;
                    }

                    .message {
                        color: green;
                    }

                    #special {
                        color: red;
                    }

                All three rules match the paragraph.

                The browser needs a way to determine the winning declaration.

        ### Source Order

            If two rules have the same selector and the same importance, the rule that appears later generally wins.

            Example:

                p {
                    color: red;
                }

                p {
                    color: blue;
                }

            Both selectors have the same specificity.

            The second rule wins:

                color → blue

            This is called source order.

        ### Specificity

            Specificity determines how strongly a selector targets an element.

            Consider:

                p {
                    color: blue;
                }

                .message {
                    color: green;
                }

                #special {
                    color: red;
                }

            HTML:

                <p class="message" id="special">Hello</p>

            All three rules match.

            The ID selector has greater specificity than the class selector, and the class selector has greater specificity than the type selector.

            Therefore:

                    #special
                    ↓
                    wins

                    .message
                    ↓
                    second

                    p
                    ↓
                    third

                    The final color is red.
                    
        ### Specificity Categories

            Specificity can be thought of in four broad categories:

            Inline styles
                ↓
            IDs
                ↓
            Classes / Attributes / Pseudo-classes
                ↓
            Elements / Pseudo-elements

            For example:

                p { }

                has type selector specificity.

                .message { }

                has class selector specificity.

                #special { }

                has ID selector specificity.

        ### Specificity Calculation

            Specificity is commonly represented using a four-part conceptual value:

            Inline | ID | Class/Attribute/Pseudo-class | Element/Pseudo-element

            For example:

                #message {
                    color: red;
                }

                .text {
                    color: blue;
                }

                Calculate the specificity

                    #message

                    It contains:

                        Inline=0
                        ID=1
                        Class=0
                        Element=0         

                    so:
                        0 | 1 | 0 | 0

                    .text

                    It contains:

                        Inline=0
                        ID=0
                        Class=1
                        Element=0

                    so:
                        0 | 0 | 1 | 0

                    Now Compare:

                        #message → 0 | 1 | 0 | 0
                        .text    → 0 | 0 | 1 | 0

                    it starts from the left:


                        0=0

                        i>0
                    
                    so #message apply red color.

            example 2:

                .box {
                    color: blue;
                }

                .container .box {
                    color: red;
                }

                <div class="container">
                    <p class="box">Hello</p>
                </div>


                First selector

                    .box

                    has one class:

                        0 | 0 | 1 | 0

                Second selector

                    .container .box

                        has two classes:

                            0 | 0 | 2 | 0

                Comparing the two Classes:

                    .box             → 0 | 0 | 1 | 0
                    .container .box  → 0 | 0 | 2 | 0

                1<2 so the second selector apply.

        ### !important 

            The !important flag gives a declaration very high priority within the cascade.

            Example:

                p {
                    color: red !important;
                }

                p {
                    color: blue;
                }

                The red declaration wins because it is marked !important.

                However, !important should not be used unnecessarily.

                It can make CSS difficult to maintain because it makes normal cascade behavior harder to override.

        ### Cascade vs Specificity

            These concepts are related but not identical.

            Cascade

                The cascade is the overall system that determines which declaration wins.

            Specificity

                Specificity is one factor used when competing declarations apply to the same element.

    ## CSS Inheritance

        Inheritance is a CSS mechanism where some property values are automatically passed from a parent element to its child elements.

        Consider this HTML:

            <div>
                <p>Hello</p>
            </div>

            If we write:

            div {
                color: blue;
            }

            the paragraph will normally also have blue text.

            Why?

            Because color is an inherited property.

            The relationship is:

                div
                ↓
                p

            The child inherits the applicable inherited property value from its parent.


        ### Parent and Child

            Consider:

                <div>
                    <p>Hello</p>
                </div>

                Here:

                    div → Parent
                    p   → Child

                If the parent has an inherited property:

                    div {
                        color: blue;
                    }

                the child can inherit it:

                    div
                    color: blue
                    ↓
                    ↓ inheritance
                    ↓
                    p
                    color: blue

            Example:

                HTML

                    <div>
                        <h1>Hello</h1>
                        <p>Welcome to CSS</p>
                    </div>

                CSS:

                    div {
                        color: blue;
                    }

                    The text inside the heading and paragraph will normally inherit the blue color

        ### Not All CSS Properties Are Inherited

            This is very important.

            Some properties inherit automatically, while others do not.

            For example:

                color ---> usually inherited
                font-family ---> usually inherited
                font-size ---> inherited
                margin ---> not inherited
                padding ---> not inherited
                border ---> not inherited
                width ---> not inherited
                height ---> not inherited

            For example:

                div {
                    color: red;
                    margin: 20px;
                }

            The child may inherit:

                color: red

            but does not automatically inherit:

                margin: 20px

        ### Common Inherited Properties:

            Some commonly inherited properties include:

                color
                font-family
                font-size
                font-style
                font-weight
                line-height
                text-align
                visibility

            However, inheritance should always be checked for the specific CSS property rather than assumed.

        ### Non-Inherited Properties

                Some commonly non-inherited properties include:

                    margin
                    padding
                    border
                    width
                    height
                    background
                    display
                    position

                For example:

                    div {
                        padding: 20px;
                    }

                The child does not automatically receive the same padding.

        ### inherit keyword

            CSS provides the inherit keyword to explicitly tell an element to inherit a property's value from its parent.

            Example:

                <div class="parent">
                    <p>Hello</p>
                </div>  

                .parent {
                    color: red;
                }

                p {
                    color: inherit;
                }


            This tells the paragraph:

                Use the value of color from my parent.
                so <p> becomes red.

            application:

                -Website text theme

                    a section of your website has a particular text color:

                    <div class="profile">
                        <h2>My Profile</h2>
                        <p>Welcome to my profile.</p>
                    </div>

                    .profile {
                        color: darkblue;
                    }

                    Because color is inherited, both the <h2> and <p> can receive the parent's color.

                    But suppose you have a property that normally isn't inherited, such as border.we can make it inherit.

                    .profile {
                        border: 2px solid black;
                    }

                    .profile p {
                        border: inherit;
                    }



        ### initial keyword

            The initial keyword sets a property to its initial/default value defined by CSS.

            Example:

                <p>Hello</p>

                p {
                    color: initial;
                }

                the margin initail means margin becomes 0.(margin:0;)

            This removes the inherited color and uses the property's initial value.

            application:

                -Resetting a button

                    <button class="custom-btn">Submit</button>

                    .custom-btn {
                        display: flex;
                        margin: 20px;
                        padding: 15px;
                    }

                    Now you want to reset the button's margin

                    .custom-btn {
                        margin: initial;
                    }

                    so the initial value of the magin is 0.

        ### unset keyword

            If the property is inherited, behave like inherit; otherwise, behave like initial.

            Is this property inherited?
                    
                Yes ---> inherit
                No  ---> initial

            Example:    

                #### unset with an inherited property

                    lets take color property

                    <div class="parent">
                        <p>Hello</p>
                    </div>

                    .parent {
                        color: red;
                    }

                    p {
                        color: unset;
                    }

                    here color is an inherited property.

                    therefore:
                        color:unset;

                        means ---> color:inherit;

                        so p gets red it inherits its parent color.
                    
                #### unset with a non-inherited property

                    lets take margin property

                    <div class="parent">
                        <p>Hello</p>
                    </div>

                    .parent{
                        margin:30px;
                    }

                    p {
                        margin: unset;
                    }

                    Because margin is not inherited, unset behaves like:
                        
                        margin: initial;

                    so it becames initial and the inital value of margin is 0

                    means exactly:

                        p{
                            margin:0;
                        }

                #### rule:

                          unset
                            |
                    Is property inherited?
                        /            \
                    Yes               No
                    |                 |
                inherit             initial

            ###application:

                -Removing a custom style

                    website has a general rule:

                    <button class="reset-button">Cancel</button>

                    button {
                        margin: 20px;
                    }

                    .reset-button {
                        margin: unset;
                    }

                    so the button margin becomes 0



        ### revert keyword

            revert removes the effect of the current CSS rule and lets the value from an earlier cascade level take effect.

            it as undoing a CSS rule.

            Example:

                <p class="text">Hello</p>

                p {
                    color: green;
                }

                .text {
                    color: red;
                }

                there are two rules affecing the same <p>

                    p ---> green
                    .text ---> red

                .text has the higher specificity, so the text color becomes red

                suppose we write :

                    p{
                        color:greeen;
                    }

                    .text {
                        color:revert;
                    }

                    here ,

                        color:revert;

                        tells dont't use the color declaration from this .text rule, go back to the earlier casecade

                    so the paragraph becomes green ,

                        p → color: green
                            ↓
                        .text → color: revert
                            ↓
                        go back in cascade
                            ↓
                        green

            #### Application:

                -Resetting browser-default styling

                if website has globally customized links:

                    a {
                        color: red;
                        text-decoration: none;
                    }

                    <div class="article">
                        <a href="#">Read more</a>
                    </div>

                    now we use 

                        .article a {
                            color: revert;
                            text-decoration: revert;
                        }

                        Go back and use what would have applied before it.
                    
                    now the default browser link dark blue will apply for the "Read more" and the decoration usually underline.

                    it go back to a lower cascade origin/layer.

    ## CSS Units

        CSS units are used to specify measurements such as:

            Width
            Height
            Font size
            Margin
            Padding
            Border width
            Position
            Spacing

        For example:

            p {
                font-size: 20px;
            }

            Here:

            20 ---> Number
            px ---> Unit

            The unit tells the browser how the number should be interpreted.

    ## Types of CSS Units:

        CSS units can broadly be divided into:

        CSS Units
            
            1. Absolute Units
            
            2. Relative Units

        1. Absolute Units

            An absolute unit represents a fixed physical or CSS-defined measurement.

            common absolute units are:
                px - pixel
                cm - Centimeter
                mm - Millimeters
                in - Inches
                pt - Points
                pc - Picas

            px is the most commonly encountered CSS unit.

            ### Pixel (px)

                px stands for pixel.

                example:

                    h1{
                        font-size:32 px;
                    }

                    .button{
                        margin:5px;
                        height:4px;
                        padding:5px;
                        width:10px;
                    }

        2. Relative units

            Relative units are based on something else, such as:

                -Parent element's size
                -Root element's font size
                -Viewport size
                -Available space

                Common relative units include:

                    % - Percentage
                    em - Relative to the font-size of the parent element
                    rem - Relative to the font-size of the root HTML element
                    vw -Viewport Width
                    vh - Viewport Height

                These units are particularly useful for responsive and scalable layouts. 

            ### Percentage

                The % unit is generally relative to another value, often the size of the containing block.

                Example:

                    .container {
                        width: 100%;
                    }

                    .box {
                        width: 50%;
                    }

                    If the container is 1000px wide, the box's width will be approximately:

                    50% of 1000px = 500px

            ### em

                em is a relative unit based on the computed font size of the relevant element/parent context.

                For example:

                    .parent {
                        font-size: 20px;
                    }

                    .child {
                        font-size: 2em;
                    }

                    if the child's em reference is 20px:

                    2 em = 2 × 20px = 40px

                    em can therefore grow or shrink depending on the surrounding font-size context.

                This can make nested elements more complex to calculate.    

            ### rem 

                rem stands for root em.

                It is relative to the font size of the root element, normally <html>.

                Example:

                    html {
                        font-size: 16px;
                    }

                    h1 {
                        font-size: 2rem;
                    }

                Calculation:

                    2rem = 2 × 16px = 32px

                Therefore:

                    1rem = 16px
                    2rem = 32px
                    3rem = 48px

                assuming the root font size is 16px.      


            ### Viewport Units

                Viewport units are relative to the browser's viewport.

                The main viewport units are:

                    1.vw
                    2.vh      


                1. VW

                    vw means viewport width.

                    .box {
                        width: 50vw;
                    }

                    1vw represents 1% of the viewport width.

                    Therefore:

                    50vw = 50% of viewport width

                    If the viewport width is 1000px:

                    50vw ≈ 500px

                2. VH

                    vh means viewport height.

                    .box {
                        height: 50vh;
                    }

                    1vh represents 1% of the viewport height.

                    Therefore:

                    50vh = 50% of viewport height.

            ### Examples:

                .hero {
                    width: 100vw;
                    height: 100vh;
                }

            This makes the element's specified width and height correspond to the viewport dimensions.

            Viewport units are useful for things such as:

                -Full-screen sections
                -Hero sections
                -Responsive layouts
                -Viewport-based sizing

            However, 100vw and 100vh can have practical considerations depending on scrollbars and mobile browser UI, so they should not be used blindly.

            Applications of vh:

                1.Full-screen landing page

                    .hero {
                        height: 100vh;
                    }

                    The section takes the full height of the screen.
                
                2.Half-screen section

                    .section {
                        height: 50vh;
                    }

                    The section takes half of the viewport height.

                3.Centering content vertically

                    .container {
                        height: 100vh;
                        display: flex;
                        align-items: center;
                    }

                    Useful for login pages, welcome pages, and loading screens.

            Applications of vw:

                1.Full viewport width

                    .banner {
                        width: 100vw;
                    }

                    The banner takes the full viewport width.
                
                2.Half viewport width

                    .box {
                        width: 50vw;
                    }

                    The box takes half of the screen width.

                3.Responsive text

                    h1 {
                        font-size: 5vw;
                    }

                    The text size changes according to the screen width.

# CSS Box Model

    The CSS Box Model describes how the browser calculates the size and spacing of every HTML element.

    Every HTML element is treated as a rectangular box consisting of four parts:

        ┌───────────────────────────────────────┐
        │                Margin                 │
        │   ┌────────────────────────────────┐  │
        │   │             Border             │  │
        │   │   ┌─────────────────────────┐  │  │
        │   │   │         Padding         │  │  │
        │   │   │   ┌─────────────────┐   │  │  │
        │   │   │   │     Content     │   │  │  │
        │   │   │   └─────────────────┘   │  │  │
        │   │   └─────────────────────────┘  │  │
        │   └────────────────────────────────┘  │
        └───────────────────────────────────────┘

        The four parts are:

            -Content
            -Padding
            -Border
            -Margin

        1.Content

            The content is the actual information inside an element.

            example:

                <div>Hello World</div>

                .box {
                    width: 300px;
                    height: 150px;
                    background-color: lightblue;
                }


                Content width  = 300px
                Content height = 150px

            Real-time use case:
                -Images
                -Cards
                -Product containers
                -Text sections
                -Input fields
                -Dashboard components

        2.Padding

            Padding is the space between the content and the border.

            Example:

                <div class="box">
                    Hello World
                </div>

                .box {
                    padding: 30px;
                    background-color: lightblue;
                }

            Use cases:
                It makes the button easier to click and gives the text breathing room.

                Padding is heavily used in buttons:

        3. Border

            A border surrounds the content and padding.

            Example:

                <div class="box">
                    Hello World
                </div>

                .box {
                    width: 300px;
                    padding: 20px;
                    border: 5px solid black;
                }

            Real-time application

                Borders are commonly used for:

                    -Cards
                    -Form inputs
                    -Tables
                    -Images
                    -Containers
                    -Separating sections

        4.Margin

            Margin is the space outside an element.

            Example:

                <div class="box">
                    Box
                </div>

                .box {
                    width: 200px;
                    height: 100px;
                    background-color: lightblue;
                    margin: 30px;
                }

            Real-time application
            
                Margin is commonly used to create space.

        ### CSS box-sizing

            The box-sizing property controls how the browser calculates the width and height of an element.

            There are two important values:

                -content-box
                -border-box

            The main difference is whether padding and border are included in the declared width and height.

            1.box-sizing: content-box

                Definition

                    content-box is the default value of the CSS box-sizing property.

                    When content-box is used:

                        The declared width and height apply only to the content area.

                    Padding and border are added outside the declared width and height. Margin is also outside the box.

                Syntax

                    .box {
                        box-sizing: content-box;
                    }

                Example:

                    <div class="box"> This is a content box. </div>

                    .box { 
                        width: 300px; 
                        height: 150px; 
                        padding: 20px; 
                        border: 5px solid black; 
                        box-sizing: content-box; 
                    }

                Calculation:

                    The declared width is:

                        width = 300px

                        But 300px represents only the content width.

                        Padding = left padding + right padding 
                        Padding = 20px + 20px
                        total padding = 40px

                        Border = left border + right border
                        Border = 5px+ 5px
                        total border = 10px

                        total width = 300px + 40px + 10px
                                    = 350px

                        so the element occupies the total 350px of width.


            2. box-sizing : border-box

                Definition

                    With border-box, the declared width and height include:

                        -Content
                        -Padding
                        -Border

                    However, margin is not included.

                    Syntax

                        .box {
                            box-sizing: border-box;
                        }

                Example:

                    <div class="box"> This is a border box. </div>

                    .box { 
                        width: 300px; 
                        height: 150px; 
                        padding: 20px; 
                        border: 5px solid black; 
                        box-sizing: border-box; 
                    }

                calculation:

                    The declared width is:

                        width = 300px

                        the 300px already includes:

                            Content + Padding + Border

                            Padding:

                                20px + 20px = 40px

                            Border:

                                5px + 5px = 10px

                            Therefore, the content area becomes:

                            Content width
                            = total width - padding - border

                            = 300px - 40px - 10px

                            = 250px
                
                border-box is commonly used

                    Suppose a container has a width of 500px.

                    You create two boxes:

                        .box {
                            width: 50%;
                            padding: 20px;
                            border: 5px solid black;
                        }

                        With content-box, the 50% represents the content width. Padding and border are then added, which can make the boxes larger than expected.

                        This can cause layout problems such as:

                            -boxes overflowing their container
                            -unexpected wrapping
                            -difficulty creating columns
                            -responsive layout problems

                        With:

                        box-sizing: border-box;

                        the declared width already includes padding and border, making the layout much easier to control.

                Real time application:

                    -Product cards
                    -Login forms
                    -Navigation bars
                    -Input fields
                    -Buttons
                    -Responsive layouts
                    -Grid layouts

    ## CSS Typography

        Introduction

            Typography in CSS refers to styling and controlling the appearance of text on a web page.

            CSS provides different properties to control:

                -Font type
                -Font size
                -Font thickness
                -Line spacing
                -Custom web fonts

            The main typography properties are:

                -font-family
                -font-size
                -font-weight
                -line-height
                -@font-face

            1.font-family

                The font-family property is used to specify the typeface or font used to display text.

                Syntax

                    selector {
                        font-family: font-name;
                    }

                Example

                    p {
                        font-family: Arial;
                    }

                In this example, the paragraph text is displayed using the Arial font.

                Multiple Font Families 

                    Multiple fonts can be specified as fallback options.

                    p {
                        font-family: Arial, Helvetica, sans-serif;
                    }

                    The browser checks from the left to rightfonts.

                    f arial not exixts then helvetica then sans serif.

                use case:

                    A website can define a default font for the entire page:

                        body {
                            font-family: Arial, sans-serif;
                        }

                    This makes all text use the same font unless another element overrides it.

            2. font-size

                The font-size property is used to control the size of text.

                Syntax

                    selector {
                        font-size: value;
                    }

                Example

                    p {
                        font-size: 20px;
                    }

                Here, the paragraph text is displayed with a font size of 20px.

            3.font-weight

                The font-weight property controls the thickness or boldness of text.

                Syntax

                    selector {
                        font-weight: value;
                    }

                Common Values

                    normal
                    bold
                    100
                    200
                    300
                    400
                    500
                    600
                    700
                    800
                    900

                Generally:

                    400 ---> normal
                    700 ---> bold

                Example:

                    <p class="normal-text">Normal text</p> 
                    <p class="bold-text">Bold text</p>

                    .normal-text { 
                        font-weight: 400; 
                    } 
                    
                    .bold-text { 
                        font-weight: 700; 
                    }

                use cases:

                    Headings are usually given a higher font weight than normal text.

                    h1 {
                        font-weight: 700;
                    }

                    p {
                        font-weight: 400;
                    }

                    This creates a clear difference between the heading and paragraph.

            4. Line height

                The line-height property controls the vertical space between lines of text.

                It is especially useful for improving the readability of paragraphs and other long text.

                Syntax

                    selector {
                        line-height: value;
                    }

                Example

                    p {
                        font-size: 18px;
                        line-height: 1.6;
                    }

                Here:

                    font-size = 18px
                    line-height = 1.6

                The approximate line height is:

                18 × 1.6 = 28.8px

                use cases:

                    For an article or documentation page:

                        .article {
                            font-size: 18px;
                            line-height: 1.6;
                        }

                    Increasing the line height makes paragraphs easier to read.

    ## Web font Integration

        A web font is a font that can be loaded by a website instead of depending only on fonts installed on the user's computer.

        CSS provides the @font-face rule to define a custom font.

        Syntax

            @font-face {
                font-family: "MyFont";
                src: url("myfont.woff2");
            }

        After defining the font, it can be used with font-family.

            body {
                font-family: "MyFont", sans-serif;
            }

        @import

            The CSS @import rule is used to import an external CSS stylesheet into another CSS file.

            It can also be used to import the CSS provided by external font services such as Google Fonts.

            The imported CSS is then available to the current stylesheet.

            Example

                @import url("style2.css");

                This imports style2.css into the current CSS file.

            Importing an External CSS File:

                Suppose we have the following files:

                project/
                │
                ├── index.html
                ├── style.css
                └── colors.css
                colors.css
                h1 {
                    color: blue;
                }

                p {
                    color: green;
                }
                style.css
                @import url("colors.css");

                body {
                    font-family: Arial, sans-serif;
                }

                Here, style.css imports the styles from colors.css.

                The browser processes them as if the imported CSS rules are available to the current stylesheet.

            Importing an External Font

                @import can also be used to import the CSS stylesheet of an external font service.

                For example, Google Fonts provides a CSS URL for fonts.

                @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

                Then we can apply the font:

                    body {
                        font-family: "Poppins", sans-serif;
                    }

                Example


                @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

                body {
                    font-family: "Poppins", sans-serif;
                }

                h1 {
                    font-size: 40px;
                }

        
            The @import rule should normally appear at the beginning of the CSS file, before other CSS rules.



        ### Fallback Fonts

            However, there are no 100% completely web safe fonts. There is always a chance that a font is not found or is not installed properly.

            Therefore, it is very important to always use fallback fonts.

                 p {
                    font-family: Tahoma, Verdana, sans-serif;
                } 

    ## CSS Colors & Background

        CSS provides properties to control the color and background appearance of HTML elements.

        Colors can be used for:

            -Text
            -Backgrounds
            -Borders
            -Shadows
            -Buttons
            -Links

        CSS supports different ways of representing colors, such as:

            -Color names
            -Hexadecimal (HEX)
            -RGB
            -RGBA
            -HSL
            -HSLA

        CSS also provides background properties for:

            -Background colors
            -Background images
            -Gradients
            -Image size
            -Image repetition
            -Image positioning

    1.CSS Color

        The color property is used to set the text color of an element.

        Syntax
        
            selector {
                color: value;
            }

        Example

            h1 {
                color: blue;
            }

            p {
                color: red;
            }

        Here:

            The <h1> text becomes blue.
            The <p> text becomes red.
    
    2.color names

        CSS provides predefined color names.

        Example

            h1 {
                color: red;
            }

            p {
                color: green;
            }

            button {
                color: white;
            }

        Some commonly used color names are:

            red
            blue
            green
            yellow
            black
            white
            orange
            purple
            gray
            pink

            Color names are easy to understand, but they provide only a limited number of choices.

            For more precise colors, we can use color spaces such as HEX, RGB, and HSL.

        ##color 

            For what purpose we have used different methods?

            A computer screen creates colors using three basic light components:
                > Red
                > Green
                > Blue
            This is called the RGB color model.

            Different color formats provide different ways to define and control the same color; RGB/HEX are convenient for exact colors, RGBA adds transparency, and HSL makes color adjustments easier.

            COLOR Name

                color: red;
                You only have predefined names.

            Disadvantages:
                For example, if you want a very specific shade:
                dark blue → ?
                professional blue → ?
                company brand blue → ?

            HEX - extra color
                color : #FF0000;
                represent red

                Why use it? 
                    Because you can specify an exact color.

                Disadvantage: 
                    It's difficult to understand by looking at it.

            RGB - Red  , Green and Blue
                color:  rgb(255,0,0)

                Why use RGB?
                    When you want to directly control the amount of red, green and blue.

                Disadvantage: 
                    Making a color lighter/darker isn't intuitive.

            RGBA - RGB + Transparency
                R - Red
                G - Green
                B - Blue
                A - Alpha (transparency)

                color: rgba(255, 0, 0, 0.5);

                Transparency Control
                    1   - completely visible
                    0.5 - semi-transparent
                    0   - completely transparent

                Disadvantage: 
                    More values make it slightly harder to read.

                    <div style="background-color: rgba(255, 0, 0, 0.5);">
                        Hello
                    </div>
                    
                    this gives the semi-transparent red

            HSL - Hue, Saturation and Lightness
                    H → Hue
                    S → Saturation
                    L → Lightness

                color: hsl(0, 100%, 50%);

                HUE -Which color?
                    0°   → Red
                    120° → Green
                    240° → Blue

                Saturation - How strong the color is ?
                    100% → strong color
                    0%   → gray 

                Lightness - How light/dark ?
                    0%   → black
                    50%  → normal
                    100% → white

                Hence, hsl(0, 100%, 50%) means ==> Red + full color strength + normal lightness.

        ## Background Color

            The background-color property is used to set the background color of an element.

        Syntax

            <div>
                <p id="box1">hello</p>
                <p id="box2">hello</p>
                <p id="box3">hello</p>
                <p id="box4">hello</p>
            </div>

            selector {
                background-color: value;
            }

        Example

            div {
                background-color: lightblue;
            }

            We can use any supported color format:

                .box1 {
                    background-color: red;
                }

                .box2 {
                    background-color: #00ff00;
                }

                .box3 {
                    background-color: rgb(0, 0, 255);
                }

                .box4 {
                    background-color: hsl(120, 100%, 50%);
                }

    ## CSS Gradients

        A gradient creates a smooth transition between two or more colors.

        Gradients are commonly used for:

            -Website headers
            -Buttons
            -Hero sections
            -Cards
            -Backgrounds
            -Banners

        CSS mainly provides:

            -Linear gradients
            -Radial gradients
            -Conic gradients

        1.Linear Gradient

            A linear gradient changes colors along a straight line.

            Syntax

                background: linear-gradient(direction, color1, color2);

            Example

                .box {
                    background: linear-gradient(to right, blue, purple);
                }

            The gradient changes from blue to purple from left to right.

            Different Directions

                background: linear-gradient(to right, red, blue);

                background: linear-gradient(to bottom, red, blue);

                background: linear-gradient(45deg, red, blue);

            Multiple Colors

                A gradient can contain more than two colors.

                .box {
                    background: linear-gradient(to right, red, yellow, green);
                }


        2.Radial Gradient

            A radial gradient starts from a central point and spreads outward.

            Syntax
            background: radial-gradient(shape, color1, color2);
            Example
            .box {
                background: radial-gradient(circle, white, blue);
            }

            The gradient starts from the center and spreads outward in a circular shape.

        3.12. Conic Gradient

            A conic gradient rotates around a center point.

            Example

                .box {
                    background: conic-gradient(red, yellow, green, blue, red);
                }

            This is useful for creating:

                -Color wheels
                -Circular charts
                -Decorative designs

        ###Background Image

            The background-image property is used to place an image behind the content of an element.

            Syntax

                selector {
                    background-image: url("image.jpg");
                }

            Example

                body {
                    background-image: url("background.jpg");
                }

            The image is placed as the background of the <body>.

        ### Background Repeat

            By default, a background image may repeat to cover the available area.

            The background-repeat property controls this behavior.

            Example

            body {
                background-image: url("pattern.png");
                background-repeat: no-repeat;
            }

            Common values:

                -repeat
                -repeat-x
                -repeat-y
                -no-repeat
                -repeat

        ### Background Size

            The background-size property controls the size of the background image.

            cover

                The image covers the entire element.

                .hero {
                    background-image: url("background.jpg");
                    background-size: cover;
                }

                The image may be cropped to completely cover the element.

            contain

                The complete image is displayed inside the element.

                .hero {
                    background-image: url("background.jpg");
                    background-size: contain;
                }

                There may be empty space if the image and element have different proportions.

            Specific Size

                We can also specify a size:

                .hero {
                    background-size: 300px 200px;
                }

        ### Background Position

            The background-position property controls where the background image is placed inside the element.

            Syntax
            
                background-position: horizontal vertical;

            Example

                .hero {
                    background-image: url("background.jpg");
                    background-position: center;
                }

            Common values include:

                -left
                -center
                -right
                -top
                -bottom

            We can also combine them:

                background-position: center top;

            This places the image at the horizontal center and top of the element.

        ### Example

            .hero {
                background-image: url("background.jpg");
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
            }

            This is commonly used for hero sections.

        ### Background attachment

            The background-attachment property controls whether the background image scrolls with the page.

                Example

                    body {
                        background-image: url("background.jpg");
                        background-attachment: fixed;
                    }

                Common values:

                    -scroll
                    -fixed
                    -local

    ## CSS display property

        The CSS display property controls how an HTML element is displayed and how it behaves in the layout.

            Every HTML element has a default display behavior.

            For example:

                <div> is block by default.
                <p> is block by default.
                <span> is inline by default.
                <a> is inline by default.

            The display property allows us to change this default behavior.

            Syntax

                selector {
                    display: value;
                }

            The commonly used values are:

                -block
                -inline
                -inline-block
                -none

        1.Block

            A block-level element normally:

                -Starts on a new line.
                -Takes up the available width by default.
                -Allows width and height to be applied.
                -Allows margin and padding on all sides.

                Example

                    <div class="box">Box 1</div>
                    <div class="box">Box 2</div>
                    .box {
                        display: block;
                        width: 200px;
                        height: 100px;
                        background-color: lightblue;
                        margin: 10px;
                    }

                    results in the page appears on the next next line.
                    
                    Even though the width is only 200px,each block element starts on a new line.

                    Common block elements

                        <div> 
                        <p> 
                        <h1> to <h6> 
                        <section> 
                        <header> 
                        <footer> 
                        <article>

        2.Inline

            An inline element:

                -Does not start on a new line.
                -Occupies only the space required by its content.
                -Allows other inline elements to appear beside it.
                -width and height generally do not apply in the normal way.
                
                Example

                    <span class="item">One</span>
                    <span class="item">Two</span>
                    <span class="item">Three</span>

                    .item {
                        display: inline;
                        background-color: lightblue;
                    }
                    
                Result

                    ┌─────┐ ┌─────┐ ┌───────┐
                    │ One │ │ Two │ │ Three │
                    └─────┘ └─────┘ └───────┘

                The elements remain on the same line.

                Important Example

                Consider:

                    .item {
                        display: inline;
                        width: 200px;
                        height: 100px;
                    }

                    The width and height will not behave as expected for a normal inline box.

                    This is one reason inline-block is useful.

        3. inline-block

            inline-block combines characteristics of both inline and block.

                It:

                -Stays on the same line like inline.
                -Allows width and height like block.
                -Allows padding and margin.
                -Takes only the width specified or required.
                
                Example

                    <div class="box">Box 1</div>
                    <div class="box">Box 2</div>
                    <div class="box">Box 3</div>

                    .box {
                        display: inline-block;

                        width: 150px;
                        height: 100px;

                        background-color: lightblue;

                        margin: 10px;
                        padding: 20px;
                    }

                Results

                    The boxes can appear next to each other:

                    ┌────────────┐  ┌────────────┐  ┌────────────┐
                    │   Box 1    │  │   Box 2    │  │   Box 3    │
                    │            │  │            │  │            │
                    └────────────┘  └────────────┘  └────────────┘

                    Use of inline-block:

                    Suppose we want three menu items or small cards to appear next to each other while still controlling their width and height.

                    inline-block can be used for this purpose.

        4.none
            
            display: none completely removes an element from the layout.

            The element:

                -Is not displayed.
                -Does not occupy space.
                -Cannot be seen on the page.
                -Other elements behave as if that element does not exist in the layout.

            Example

                <p>First paragraph</p>

                <p class="hidden">This paragraph is hidden.</p>

                <p>Third paragraph</p>

                .hidden {
                    display: none;
                }
                
            Result

                Only these are visible:

                First paragraph

                Third paragraph

            Common use cases

                -Hiding menus
                -Showing/hiding modal windows
                -Responsive navigation
                -Conditional content
                -Elements controlled by JavaScript


    ## CSS Flexbox

        CSS Flexbox, also called the Flexible Box Layout, is a CSS layout system used to arrange elements in a single direction.

        Flexbox is mainly used to arrange elements:

            Horizontally in a row
            Vertically in a column
            With flexible spacing
            With alignment and positioning

        For example:

            ┌─────────┐  ┌─────────┐  ┌─────────┐
            │ Item 1  │  │ Item 2  │  │ Item 3  │
            └─────────┘  └─────────┘  └─────────┘

            or:

            ┌─────────┐
            │ Item 1  │
            ├─────────┤
            │ Item 2  │
            ├─────────┤
            │ Item 3  │
            └─────────┘

            Flexbox is especially useful for:

                -Navigation bars
                -Buttons
                -Headers
                -Cards
                -Form layouts
                -Centering elements

        1D layout

            -Flexbox is a one-dimensional layout system.

            -This means Flexbox primarily works in one direction at a time.

        Flex Container

            Flexbox has two important concepts:

                -Flex Container
                -Flex Items


            <div class="container"> 
                <div>Item 1</div> 
                <div>Item 2</div> 
                <div>Item 3</div>
            </div>

            The parent:

                <div class="container">  ---> will become the Flex Container.

                <div>Item 1</div> ---> The direct childrens
                <div>Item 2</div>
                <div>Item 3</div>

                are the Flex Items.

                Flex Container 
                │ 
                ├── Flex Item 1 
                ├── Flex Item 2 
                └── Flex Item 3

        
        Example

            To create a Flex Container, we use:

            display: flex;

            Example

                <div class="container">

                    <div class="item">Item 1</div>
                    <div class="item">Item 2</div>
                    <div class="item">Item 3</div>

                </div>

                .container {
                    display: flex;
                }

                Now .container becomes a Flex Container.

            Its direct children automatically become Flex Items.

        Default Flex Direction

            By default, Flexbox uses:

                flex-direction: row;

            This means the items are arranged horizontally.

            Example:

                <div class="container">

                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>

                </div>
                .container {
                    display: flex;
                }

        Gives:

            ┌─────────┐  ┌─────────┐  ┌─────────┐
            │ Item 1  │  │ Item 2  │  │ Item 3  │
            └─────────┘  └─────────┘  └─────────┘

            This is because:

            display: flex;

        flex-direction

            The flex-direction property determines the direction in which Flex Items are arranged.

            Syntax
                flex-direction: value;

                The main values are:

                    -row
                    -row-reverse
                    -column
                    -column-reverse

        flex direction:row

            This is the default direction.

                .container {
                    display: flex;
                    flex-direction: row;
                }

                Result:

                Item 1 → Item 2 → Item 3

        flex direction:row-reversed

            This reverses the horizontal direction.

                .container {
                    display: flex;
                    flex-direction: row-reverse;
                }

            Result:

                Item 3 → Item 2 → Item 1

                The items are arranged from right to left.

        flex direction: Column

            This arranges items vertically.

                .container {
                    display: flex;
                    flex-direction: column;
                }

                Result:

                    Item 1
                    ↓
                    Item 2
                    ↓
                    Item 3

                This is useful when creating vertical layouts.

        flex-direction: column-reverse

            This reverses the vertical direction.

            .container {
                display: flex;
                flex-direction: column-reverse;
            }

            Result:

            Item 3
            ↓
            Item 2
            ↓
            Item 1

        Main Axis and Cross Axis

            This is one of the most important concepts in Flexbox.

            Flexbox has two axes:

                1.Main Axis
                2.Cross Axis

            The direction of the main axis depends on flex-direction.
                                                    
            When flex-direction:row

                the main axis is horizontal.

                    Main Axis
                    ────────────────────────→

                    Item 1    Item 2    Item 3

                    Cross Axis
                        ↓

                    So:

                    Main Axis  → Horizontal
                    Cross Axis → Vertical

            when the flex-direction:column

                The main axis is vertical

                    main Axis

                        Item 1
                        Item 2 
                        Item 3
                
                Cross Axis → Horizontal

                So:

                    Main Axis  → Vertical
                    Cross Axis → Horizontal

                Important Rule

                    justify-content works along the main axis.

                    align-items works along the cross axis.

        justify-content

            The justify-content property controls how Flex Items are positioned along the main axis.

            Syntax

                justify-content: value;

                Common values are:

                    flex-start
                    center
                    flex-end
                    space-between
                    space-around
                    space-evenly

        justify-content: flex-start

            Items are placed at the beginning of the main axis.

                .container {
                    display: flex;
                    justify-content: flex-start;
                }

                Result:

                ┌──────┐ ┌──────┐ ┌──────┐
                │ Item │ │ Item │ │ Item │
                └──────┘ └──────┘ └──────┘
                ↑
                Start

                This is the default value.


            justify-content: center

                Items are placed in the center of the main axis.

                .container {
                    display: flex;
                    justify-content: center;
                }

                Result:

                        ┌──────┐ ┌──────┐ ┌──────┐
                        │ Item │ │ Item │ │ Item │
                        └──────┘ └──────┘ └──────┘
                                    ↑
                                Center

                This is commonly used to center navigation items or content horizontally.

            justify-content: flex-end

                Items are placed at the end of the main axis.

                .container {
                    display: flex;
                    justify-content: flex-end;
                }

                Result:

                                            ┌──────┐ ┌──────┐ ┌──────┐
                                            │ Item │ │ Item │ │ Item │
                                            └──────┘ └──────┘ └──────┘


            justify-content: space-between

                The available space is distributed between the items.

                .container {
                    display: flex;
                    justify-content: space-between;
                }

                Result:

                ┌──────┐              ┌──────┐              ┌──────┐
                │ Item │              │ Item │              │ Item │
                └──────┘              └──────┘              └──────┘

                There is no extra space before the first item or after the last item.

            justify-content: space-around

                Space is distributed around each item.

                .container {
                    display: flex;
                    justify-content: space-around;
                }

                Conceptually:

                ┌──────┐      ┌──────┐      ┌──────┐
                │ Item │      │ Item │      │ Item │
                └──────┘      └──────┘      └──────┘

                Each item receives space around it.


            justify-content: space-evenly

                The available space is distributed evenly between the items and the container edges.

                .container {
                    display: flex;
                    justify-content: space-evenly;
                }

                Conceptually:

                ┌──────┐    ┌──────┐    ┌──────┐
                │ Item │    │ Item │    │ Item │
                └──────┘    └──────┘    └──────┘

                The gaps are equal.

            align-items

                The align-items property controls the alignment of Flex Items along the cross axis.

                Syntax

                    align-items: value;

                    Common values include:

                        -stretch
                        -flex-start
                        -center
                        -flex-end

            align-items:center

                .container {
                    display: flex;
                    height: 300px;

                    align-items: center;
                }

                The items are centered vertically when the main axis is a row.

                ┌──────────────────────────────────┐
                │                                  │
                │                                  │
                │   Item 1   Item 2   Item 3       │
                │                                  │
                │                                  │
                └──────────────────────────────────┘

                one of the most common Flexbox techniques.

            Centering an Element

                To center an element both horizontally and vertically:

                .container {
                    display: flex;

                    justify-content: center;
                    align-items: center;

                    height: 300px;
                }

                Here:

                justify-content
                    ↓
                Horizontal center

                align-items
                    ↓
                Vertical center

                Result:

                ┌──────────────────────────────┐
                │                              │
                │                              │
                │          ┌────────┐          │
                │          │  Item  │          │
                │          └────────┘          │
                │                              │
                │                              │
                └──────────────────────────────┘


            gap

                The gap property creates space between Flex Items.

                .container {
                    display: flex;
                    gap: 20px;
                }

                Result:

                ┌────────┐   20px   ┌────────┐   20px   ┌────────┐
                │ Item 1 │          │ Item 2 │          │ Item 3 │
                └────────┘          └────────┘          └────────┘

                Unlike manually adding margins to each item, gap directly controls the spacing between Flex Items.


            flex-wrap

                Normally, Flex Items try to stay on one line.

                The flex-wrap property controls whether items are allowed to move to another line.

                Syntax

                    flex-wrap: value;

                Values:

                    -nowrap
                    -wrap
                    -wrap-reverse

            flex-wrap: nowrap

                This is the default.

                    .container {
                        display: flex;
                        flex-wrap: nowrap;
                    }

                The items remain on one line even when space becomes limited.

            flex-wrap:wrap

                Items can move to the next line when there is not enough space.

                .container {
                    display: flex;
                    flex-wrap: wrap;
                }

                Example:

                ┌────────┐ ┌────────┐ ┌────────┐
                │ Item 1 │ │ Item 2 │ │ Item 3 │
                └────────┘ └────────┘ └────────┘

                ┌────────┐ ┌────────┐
                │ Item 4 │ │ Item 5 │
                └────────┘ └────────┘

                This is useful for responsive layouts.

            flex-flow

                flex-flow is a shorthand property for:

                    flex-direction
                    flex-wrap

                    Example:

                        .container {
                            flex-flow: row wrap;
                        }

                        This is equivalent to:

                        .container {
                            flex-direction: row;
                            flex-wrap: wrap;
                        }

        align-content

            align-content controls the alignment of multiple flex lines along the cross axis.

            It becomes useful when:

                flex-wrap: wrap;

                is being used and there are multiple rows or columns of Flex Items.

            Example:

                .container {
                    display: flex;
                    flex-wrap: wrap;
                    align-content: center;
                }

            Important:

                align-items aligns items within a flex line.

                align-content controls the positioning of multiple flex lines.

        flex-grow

            flex-grow determines how much a Flex Item can grow when extra space is available.

            Example:

                .item1 {
                    flex-grow: 1;
                }

                .item2 {
                    flex-grow: 2;
                }

            The available extra space is distributed according to the ratio:

            1 : 2

            Therefore, Item 2 receives twice as much extra space as Item 1.

        flex-shrink

            flex-shrink determines how much a Flex Item can shrink when there is not enough space.

            Example:

                .item1 {
                    flex-shrink: 1;
                }

                The default value is generally:

                flex-shrink: 1;

                An item with:

                flex-shrink: 0;

                will not shrink because of Flexbox's shrinking algorithm.



    ## Grid layout

        CSS Grid is a CSS layout system used to arrange HTML elements into rows and columns.

        It is especially useful when we need to create a two-dimensional layout.

        For example:

                Column 1    Column 2    Column 3
                ┌─────────┬─────────┬─────────┐
        Row 1   │ Item 1  │ Item 2  │ Item 3  |
                ├─────────┼─────────┼─────────┤
        Row 2   │ Item 4  │ Item 5  │ Item 6  │
                └─────────┴─────────┴─────────┘

                here,

                    -Rows run horizontally.
                    -Columns run vertically.
                    -Each individual area is called a grid cell.

        ### Why Do We Need CSS Grid?

            Web pages often contain layouts such as:

                -Product cards
                -Image galleries
                -Dashboards
                -Photo galleries
                -Website sections
                -Sidebars
                -Two-column layouts
                -Three-column layouts

                For example, an online shopping website might display products like this:

                    ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
                    │   Product   │ │   Product   │ │   Product   │
                    │      1      │ │      2      │ │      3      │
                    └─────────────┘ └─────────────┘ └─────────────┘

                    ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
                    │   Product   │ │   Product   │ │   Product   │
                    │      4      │ │      5      │ │      6      │
                    └─────────────┘ └─────────────┘ └─────────────┘

                    CSS Grid makes this type of layout much easier to create.

        ### Flexbox

            Flexbox is mainly used for a one-dimensional layout.

                Item 1 → Item 2 → Item 3 → Item 4
                Grid

                Grid is designed for a two-dimensional layout.

                Item 1    Item 2    Item 3
                Item 4    Item 5    Item 6

                Grid Container and Grid Items

                CSS Grid has two important concepts:

                    Grid Container
                    Grid Items


                    <div class="container">

                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                        <div>Item 4</div>

                    </div>

                    The structure is:

                    .container
                        │
                        ├── Item 1
                        ├── Item 2
                        ├── Item 3
                        └── Item 4

                    The parent:

                    <div class="container">

                    will become the Grid Container.

                The direct children:

                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>

                    are the Grid Items.

            ### Creating a grid

                To make an element a Grid Container, we use:

                display: grid;

                Example
                
                    <div class="container">

                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                        <div>Item 4</div>

                    </div>

                    .container {
                        display: grid;
                    }

                Now .container becomes a Grid Container.

                However, we have not yet specified how many columns we want.

            ### Creating Columns

                The grid-template-columns property is used to define the columns of a grid.

                Syntax

                    grid-template-columns: value;

                For example:

                    .container {
                        display: grid;
                        grid-template-columns: 200px 200px 200px;
                    }

                This creates three columns.

                ┌─────────┬─────────┬─────────┐
                │ Column 1│ Column 2│ Column 3│
                │  200px  │  200px  │  200px  │
                └─────────┴─────────┴─────────┘

                Each value represents one column.

            Example

                <div class="container"> 
                    <div class="item">Item 1</div> 
                    <div class="item">Item 2</div> 
                    <div class="item">Item 3</div> 
                    <div class="item">Item 4</div> 
                    <div class="item">Item 5</div> 
                    <div class="item">Item 6</div> 
                </div>

                ┌──────────┬──────────┬──────────┐ 
                │ Item 1   │ Item 2   │ Item 3   │  
                │ Item 4   │ Item 5   │ Item 6   │ 
                |          |          |
                └──────────┴──────────┴──────────┘

            Rows can be controlled using:

            grid-template-rows

            Example

                .container {
                    display: grid;

                    grid-template-columns: 200px 200px;
                    grid-template-rows: 100px 150px;
                }

                ┌──────────────┬──────────────┐ 
        100px   │              │              │
                │ Row 1        │ Row 1        │
                │              │              │
                ├──────────────┼──────────────┤
                │              │              │
                │ Row 2        │ Row 2        │
        150px   │              │              │
                │              │              │
                |______________|______________|

                grid-template-columns ---> controls columns.

                grid-template-rows ---> controls rows


        ## The fr Unit

            The fr unit is one of the most useful units in CSS Grid.

                fr means fraction of the available space.

                For example:

                    grid-template-columns: 1fr 1fr 1fr;

                This means:

                    1 fraction : 1 fraction : 1 fraction

                The available space is divided equally between the three columns.

            use of fr:

                Suppose the container has a width of 900px.

                With:

                    grid-template-columns: 1fr 1fr 1fr;

                    the available space is divided into three equal parts:

                    900px ÷ 3

                    = 300px

                    ┌────────┬────────┬────────┐
                    │ 300px  │ 300px  │ 300px  │
                    └────────┴────────┴────────┘

                    If the container becomes 1200px:

                    1200px ÷ 3

                    = 400px

                    ┌──────────┬──────────┬──────────┐
                    │  400px   │  400px   │  400px   │
                    └──────────┴──────────┴──────────┘

                    The columns automatically adjust according to the available space.

                    This makes fr very useful for responsive layouts.

            Unequal Fractions

                Fractions don't have to be equal.

                For example:

                    grid-template-columns: 1fr 2fr;

                This means:

                    1 part : 2 parts

                The total number of parts is:

                    1 + 2 = 3 parts

                Suppose the available width is 900px.

                    900 ÷ 3 = 300px

                Therefore:

                    1fr = 300px
                    2fr = 600px

                The result is:

                    ┌──────────────┬──────────────────────────────┐
                    │              │                              │
                    │     1fr      │             2fr              │
                    │              │                              │
                    └──────────────┴──────────────────────────────┘
                        300px                 600px

                This is useful for layouts such as:

                    Sidebar          Main Content
                    1fr                2fr

            gap property

                Grid items are often separated by some space.

                We can use:

                gap

                Example

                    .container {
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        gap: 20px;
                    }

                The result is:

                ┌──────────┐   20px   ┌──────────┐   20px   ┌──────────┐
                │  Item 1  │          │  Item 2  │          │  Item 3  │
                └──────────┘          └──────────┘          └──────────┘

                            20px between rows

                ┌──────────┐          ┌──────────┐          ┌──────────┐
                │  Item 4  │          │  Item 5  │          │  Item 6  │
                └──────────┘          └──────────┘          └──────────┘

                gap creates space between both rows and columns.


            row-gap

                If we want to control only the spacing between rows:

                    .container {
                        row-gap: 20px;
                    }

            column-gap

                If we want to control only the spacing between columns:

                .container {
                    column-gap: 20px;
                }

    

            The repeat() Function

                Suppose we want four equal columns.

                We could write:

                    grid-template-columns: 1fr 1fr 1fr 1fr;

                But CSS provides a shorter way:

                    grid-template-columns: repeat(4, 1fr);

                The syntax is:

                    repeat(number, value)

                So:

                    repeat(4, 1fr)  

                means:

                    1fr 1fr 1fr 1fr

                Another example:

                    grid-template-columns:  (3, 200px);

                means:

                    200px 200px 200px

            Grid lines

                Grid also contains grid lines.

                Suppose we create three columns:

                    grid-template-columns: 1fr 1fr 1fr;

                        There are three columns but four vertical grid lines.

                        Line 1       Line 2       Line 3       Line 4
                        │            │            │            │
                        │  Column 1  │  Column 2  │  Column 3  │
                        │            │            │            │

                    The lines are numbered from left to right.

                    Similarly, if we have two rows:

                    ──────────── Line 1

                        Row 1

                    ──────────── Line 2

                        Row 2

                    ──────────── Line 3

                    Therefore:

                    The number of grid lines is generally the number of tracks + 1.
            
            Grid Cells

                A grid cell is the smallest individual area created by the intersection of a row and a column.

                For example:

                    ┌─────────┬─────────┬─────────┐
                    │ Cell 1  │ Cell 2  │ Cell 3  │
                    ├─────────┼─────────┼─────────┤
                    │ Cell 4  │ Cell 5  │ Cell 6  │
                    └─────────┴─────────┴─────────┘

                    Each area represents one grid cell.

                    A grid item normally occupies one grid cell.
            
            Grid columns

                The grid-column property controls the horizontal position and size of a grid item.

                Example:

                    .item1 {
                        grid-column: 1 / 3;
                    }

                    This means:

                    Start at grid line 1
                            ↓
                            1       2       3       4
                            │       │       │       │
                            ├───────┴───────┤
                            │    Item 1     │
                            └───────────────┘
                                            ↑
                                    End at line 3

                    The item occupies:

                        Column 1 + Column 2

                    So:

                        grid-column: 1 / 3;

                    means:

                        Start at line 1 and end at line 3.

            grid-row

                The same concept applies vertically.

                    .item1 {
                        grid-row: 1 / 3;
                    }

                This means:

                    Start at row line 1
                            ↓

                    ──────────────
                        Row 1
                    ──────────────
                        Row 2
                    ──────────────
                            ↑
                    End at row line 3

                Therefore:

                    grid-column

                    controls horizontal placement.

                    grid-row

                    controls vertical placement.

            span

                Instead of specifying the ending grid line, we can specify how many tracks an item should occupy.

                Example:

                    .item1 {
                        grid-column: span 2;
                    }

                    This means:

                        Make the item occupy two columns.

                    Example:

                        ┌──────────────────────┬────────────┐
                        │                      │            │
                        │       Item 1         │   Item 2   │
                        │       span 2         │            │
                        │                      │            │
                        └──────────────────────┴────────────┘

                    Similarly:

                        .item1 {
                            grid-row: span 2;
                        }

                    means the item occupies two rows.


# Positioning

    CSS Positioning is used to control the placement of HTML elements on a webpage.

    Normally, HTML elements are arranged according to the normal document flow. The position property allows us to change how an element is positioned and where it appears.

        CSS positioning is commonly used for:

            -Placing elements at specific locations
            -Creating overlapping elements
            -Placing text over images
            -Creating notification badges
            -Creating fixed navigation bars
            -Creating sticky headers
            -Positioning buttons and icons

        syntax

            selector {
                position: value;
            }

            Example:

                .box {
                    position: relative;
                }

            The main values of the position property are:

                -static
                -relative
                -absolute
                -fixed
                -sticky

        1.Postion:static

            static is the default positioning of an HTML element.

            The element follows the normal document flow.

                .box {
                    position: static;
                }
                
            Example

                <div class="box">Box 1</div>
                <div class="box">Box 2</div>

                .box {
                    position: static;
                    width: 100px;
                    height: 100px;
                    background-color: lightblue;
                }

                Result

                    The elements appear one after another according to the normal document flow.

                    When an element has:

                    position: static;

                        the following properties do not normally affect its position:

                        -top
                        -right
                        -bottom
                        -left

                        Example:

                        .box {
                            position: static;
                            top: 50px;
                        }

                        top: 50px will not move the element.

                        static is useful when an element should behave normally without any special positioning.
        
        2.Position:relative

            relative positions an element relative to its original position.

                .box {
                    position: relative;
                }

            The element remains in the normal document flow, but we can move it using:

                -top
                -right
                -bottom
                -left
                
                Example

                <div class="box">Box</div>
                .box {
                    width: 100px;
                    height: 100px;
                    background-color: lightblue;

                    position: relative;
                    top: 20px;
                    left: 30px;
                }

                Explanation

                    top: 20px;

                    moves the element 20px downward.

                    left: 30px;

                    moves the element 30px to the right.

                    Important

                    The original space occupied by the element is still preserved.

                Real-Time Use Case

                    relative is commonly used when:

                        -Slightly moving an element
                        -Creating a reference point for an absolutely positioned child
                        -Positioning badges inside cards
                        -Positioning icons inside containers.

        3.Position:absolute

            absolute positions an element relative to its nearest positioned ancestor.

            The element is removed from the normal document flow.

            .box {
                position: absolute;
            }

            It can be positioned using:

                -top
                -right
                -bottom
                -left

            Example

            <div class="container">
                <div class="box">Box</div>
            </div>

            .container {
                width: 300px;
                height: 200px;
                background-color: lightgray;

                position: relative;
            }

            .box {
                width: 100px;
                height: 100px;
                background-color: lightblue;

                position: absolute;
                top:20px,
                right:20px;
            }

            Explanation

                The parent has:

                .container {
                    position: relative;
                }

                Therefore, it becomes the reference point for the absolute child.

                The child has:

                .box {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                }

                So the box is positioned:

                20px from the top
                20px from the right

                of the container.

            Common Pattern

                A very common CSS pattern is:

                .parent {
                    position: relative;
                }

                .child {
                    position: absolute;
                }

            The parent creates the reference point, and the child is positioned inside it.

            Real-Time Use Case

                absolute is commonly used for:

                -Notification badges
                -Icons inside input fields
                -Text over images
                -Sale labels on product cards
                -Dropdown menus
                -Close buttons

    ## position:fixed

        fixed positions an element relative to the browser viewport.

        The element remains in the same position even when the page is scrolled.

            .button {
                position: fixed;
            }

            Example

                <button class="help-button">Help</button>
                .help-button {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                }

                Explanation

                    bottom: 20px;

                    places the button 20px from the bottom of the viewport.

                    right: 20px;

                    places it 20px from the right side.

                    When the user scrolls, the button remains in that position.

                When the user scrolls, the button remains in that position.

                Real-Time Use Case

                    fixed is commonly used for:

                        -Chat buttons
                        -Help buttons
                        -Back-to-top buttons
                        -Floating action buttons
                        -Fixed navigation bars
                        -Cookie notifications

    position:sticky
    
        sticky combines normal document flow with fixed-like positioning.

        An element initially behaves like a normally positioned element. When the user scrolls and the element reaches the specified position, it sticks to that position.

            .header {
                position: sticky;
                top: 0;
            }

        Example

            <div class="header">
                Navigation Bar
            </div>

            <p>Content...</p>
            <p>Content...</p>
            <p>Content...</p>

            .header {
                position: sticky;
                top: 0;
                background-color: lightblue;
            }

        Explaination

            Initially, the navigation bar appears in its normal position.

            When the user scrolls and the navigation bar reaches the top of the viewport, it stays there while its scrolling container allows it.

                Real-Time Use Case

                    sticky is commonly used for:

                        -Navigation bars
                        -Table headers
                        -Section headings
                        -Sidebars
                        -Filters
                        -Category menus

        Positioning properties

            The following properties are commonly used with positioned elements:

                -top
                -right
                -bottom
                -left

                They control the distance between the element and its positioning reference.

        Z - Index & Stacking contexts
             
            When multiple HTML elements overlap each other, the browser needs to decide which element should appear in front and which should appear behind.

            CSS provides the z-index property to control this front-to-back order.

            This is called the Z-axis.

            For example

                on an e-commerce website, a SALE badge may need to appear on top of a product image. A dropdown menu may need to appear above the page content, and a modal window may need to appear above everything else.

            These situations are handled using z-index and stacking contexts.

            Axes 

                X-axis

                    Controls the horizontal direction:

                    Left  ←────────────→  Right

                    In CSS, properties such as left and right can affect the horizontal position.

                 Y-axis

                    Controls the vertical direction:

                    Top
                    ↑
                    │
                    ↓
                    Bottom

                    Properties such as top and bottom can affect the vertical position.

                Z-axis

                    Controls the front-to-back direction:

                            Element 3     ← Front
                            Element 2
                            Element 1     ← Back

                    The Z-axis becomes important when elements overlap.

            ### z-index

                z-index is a CSS property used to control the stacking order of overlapping elements.

                Syntax

                    selector {
                        z-index: value;
                    }

                Example:

                    .box {
                        position: relative;
                        z-index: 2;
                    }
                    
            ### Use of z-index

                <div class="box1">Box 1</div>
                <div class="box2">Box 2</div>

                .box1 {
                    position: absolute;
                    top: 50px;
                    left: 50px;
                }

                .box2 {
                    position: absolute;
                    top: 80px;
                    left: 80px;
                }

                The two elements overlap.

                ┌───────────────┐
                │     Box 1     │
                │        ┌───────────────┐
                │        │     Box 2     │
                │        │               │
                └────────┼───────────────┘
                        └───────────────┘

                Now we need to decide which box should appear on top.

                We can use z-index:

                    .box1 {
                        position: absolute;
                        z-index: 1;
                    }

                    .box2 {
                        position: absolute;
                        z-index: 2;
                    }

                    Since Box 2 has a higher z-index, it appears above Box 1.

                    Box 2 → z-index: 2 → Front
                    Box 1 → z-index: 1 → Back

            Stacking Order

                The stacking order determines the order in which overlapping elements are displayed.

                For example:

                    .box1 {
                        z-index: 1;
                    }

                    .box2 {
                        z-index: 2;
                    }

                    .box3 {
                        z-index: 3;
                    }

                    The general order is:

                          User
                            
                            ↓

                        Box 3  ← Front
                        Box 2
                        Box 1  ← Back

                    So, within the same stacking context:

                    Higher z-index
                        ↓
                    Appears in front

            ## Real time use case

                E-commerce websites commonly display a SALE badge over a product image.

                HTML

                    <div class="product">
                        <img src="shirt.jpg" alt="Women's T-shirt">
                        <span class="sale">SALE</span>
                    </div>
                   
                CSS

                    .product {
                        position: relative;
                    }

                    .sale {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        z-index: 2;
                    }

                pattern is commonly used for 
                    This pattern is commonly used for:

                        -SALE badges
                        -New product labels
                        -Discount labels
                        -Featured labels
                        -Product status indicators
    
    ## Media Queries in CSS 

        Media Queries are a CSS feature used to apply different styles based on the characteristics of the device or browser.

            They are commonly used to make websites responsive, meaning the layout can adapt to:

                -Mobile phones
                -Tablets
                -Laptops
                -Desktop monitors
                -Different screen orientations
                -Different display capabilities

            For example, we may want a navigation bar to display normally on a desktop but change its layout on a mobile screen.

                @media (max-width: 768px) {

                    .navbar {
                        display: none;
                    }

                }

                The CSS inside the @media block is applied only when the condition is satisfied.

            Why Do We Need Media Queries?

                A website can be viewed on many different screen sizes.

                If we use exactly the same layout for both devices, the desktop design may not fit properly on a mobile screen.

                Media queries allow us to change the CSS according to the available screen size.

                example

                    @media (max-width: 768px) {

                        body {
                            background-color: lightblue;
                        }

                    }

            workflow

                @media (max-width: 768px) {

                    body {
                        background-color: lightblue;
                    }

                }

                the browser checks 

                    Is the viewport width ≤ 768px?
                                │
                        ┌─────┴─────┐
                        YES           NO
                        │             │
                        ↓             ↓
                    Apply CSS       Ignore this CSS

                so the browser

                    500px ---> CSS applies
                    700px ---> CSS applies
                    768px ---> CSS applies
                    900px ---> CSS does not apply

                max-width

                    Apply the CSS when the viewport width is less than or equal to the specified value.

                    code:

                        @media (max-width: 768px) {

                                h1 {
                                    font-size: 30px;
                                }

                            }

                    here,When the viewport width is 768px or smaller, make the heading 30px.

                min-width

                    Apply the CSS when the viewport width is greater than or equal to the specified value.

                    @media (min-width: 768px) {

                            .container {
                                width: 80%;
                            }

                        }

                    The CSS applies when

                        768px → applies
                        900px → applies
                        1200px → applies
                        500px → does not apply

                Changing the grid

                    Media queries are especially useful with CSS Grid.

                        .product-grid {
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            gap: 20px;
                        }

                        on a large screen

                            ┌────┐ ┌────┐ ┌────┐ ┌────┐
                            │  1 │ │  2 │ │  3 │ │  4 │
                            └────┘ └────┘ └────┘ └────┘
                        
                        We can change it by:

                            @media (max-width: 768px) {

                                    .product-grid {
                                        grid-template-columns: repeat(2, 1fr);
                                    }

                                }

                        Desktop

                            ┌────┐ ┌────┐ ┌────┐ ┌────┐
                            │  1 │ │  2 │ │  3 │ │  4 │
                            └────┘ └────┘ └────┘ └────┘


                        Mobile

                            ┌────┐ ┌────┐
                            │  1 │ │  2 │
                            └────┘ └────┘

                            ┌────┐ ┌────┐
                            │  3 │ │  4 │
                            └────┘ └────┘

            ### Orientation

                Media queries can also detect the device orientation.

                There are two common orientations:

                    -portrait
                    -landscape

                example

                    portrait

                        @media (orientation: portrait) {

                            body {
                                background-color: lightblue;
                            }

                        }       
                    
                    landscape

                        @media (orientation: landscape) {

                            body {
                                background-color: lightgreen;
                            }

                        }

            ### and keyword

                The and keyword allows us to combine conditions.

                @media (min-width: 600px) and (max-width: 1000px) {

                    .container {
                        width: 90%;
                    }

                }

                This applies when 600px ≤ viewport width ≤ 1000px

            ### not keyword

                @media not print {

                    body {
                        font-family: Arial, sans-serif;
                    }

                }

                This means the rule applies when the media type is not print.

            ### Media Type

                A media query can also specify the type of output medium.

                    @media screen {
                        /* Screen devices */
                    }

                    @media print {
                        /* Printed documents */
                    }

        ### Two Common Approach 

            There are two common approaches to responsive design.     

                1.Desktop-first 

                    .product-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }

                    Then modify it for smaller screens.

                        @media (max-width: 768px) {
                            .product-grid {
                                grid-template-columns: 1fr;
                            }
                        }

                2.Mobile-first 

                    Start with the smaller layout:

                        .product-grid {
                            grid-template-columns: 1fr;
                        }

                        Then add styles for larger screens:

                            @media (min-width: 768px) {

                                .product-grid {
                                    grid-template-columns: repeat(2, 1fr);
                                }

                            }

                            @media (min-width: 1024px) {

                                .product-grid {
                                    grid-template-columns: repeat(4, 1fr);
                                }

                            }

                    Mobile-first is very common in modern responsive development because you start with the most constrained screen and progressively enhance the layout.

    ## Fluid Layout in CSS

        A fluid layout is a web layout that can automatically adjust its size according to the available screen space.

        Instead of depending only on fixed dimensions such as:

            width: 500px;

        we can use flexible value and constraints such as : 

            width: 100%;
            max-width: 600px;
            min-width: 300px;

        There are also CSS functions such as 

            min()
            max()
            clamp()

        to create layouts that adapt to different screen sizes.

    ## Need for fluid Layouts?

        Users can access the same website from many different screens:

                        Desktop
            ┌─────────────────────────────────────────────┐
            │                                             │
            │                Website                      │
            │                                             │
            └─────────────────────────────────────────────┘


            Tablet
            ┌──────────────────────────────┐
            │                              │
            │          Website             │
            │                              │
            └──────────────────────────────┘


            Mobile
            ┌─────────────────┐
            │                 │
            │    Website      │
            │                 │
            └─────────────────┘   

            if we use the fixed dimensions,the content may leads to the,

                -overflow the screen
                -become too wider
                -create horizontal scrolling
                -waste available space

            Fluid layouts allow elements to grow and shrink within controlled limits.

            ### Fixed Layout

                A fixed width does not automatically adapt to the available space.                                 

                    .container {
                        width: 600px;
                    }

                    The element will try to remain 600px wide.

                    The element can become wider than the viewport.

            ### Fluid layout    

                .container {
                    width: 100%;
                    max-width: 600px;
                }

                Now the elements can shrink when necessary.

                This approach is much more flexible.

            ### Width:100% 

                 The % unit is the common used for fluid layouts.

                 .container {
                    width: 100%;
                }

                This means the element's width equal to the available width of its containing block.

                example

                    1200px → container ≈ 1200px
                    800px  → container ≈ 800px
                    500px  → container ≈ 500px

                    This allows the element to adapt.
                    
            ### max-width

                Defines the maximum width an element is allowed to have

                    .container {
                        width: 100%;
                        max-width: 1200px;
                    } 

                    This create an important combination:

                        width: 100%
                            +
                        max-width: 1200px

                    Use all available space, but never become wider than 1200px

            ### Centering a Fluid Container

                We can combine max-width with:

                    margin: 0 auto;

                Example:

                    .container {
                        width: 100%;
                        max-width: 1200px;
                        margin: 0 auto;
                    }

                What does the margin:0 auto do?

                    The auto horizontal margins distribute the remaining space equally, centering the container.

            ### min-width

                min-width specifies the minimum width an element can have.

                    .box {
                        width: 50%;
                        min-width: 300px;
                    } 

                    The element can normally be 50% wide, but it should not become narrower than 300px.

                    but ---> min-width can sometimes cause horizontal overflow on very small screens if the minimum value is larger than the available viewport.

            ### min height

                min-height defines the minimum height of an element.

                example

                    .hero {
                        min-height: 500px;
                    }

                    This means that the hero section should be atleast 500px tall.

                    If the content requires more space, the element can grow beyond 500px.

            ### max height

                max-height defines the maximum height an element is allowed to have.

                    .box {
                        max-height: 400px;
                        overflow: auto;
                    }

                    If the content becomes taller than 400px, the overflow property can determine what happens.

                    For example,

                        overflow: auto;

                        can provide scrolling when necessary.

            ### min() function

                The min() CSS function allows us to choose the smallest value from multiple options.


                Syntax

                property: min(value1, value2);

                Example:

                    .container {
                        width: min(90%, 1200px);
                    }

                The browser chooses whichever value is smaller.

            ### max() function

                The max() function does the opposite.

                It chooses the largest value from the given options.

                Syntax

                    property: max(value1, value2);

                Example:

                    .box {
                        width: max(50%, 300px);
                    }

                    The browser chooses whichever value is larger.


            ### clamp() function
            
                clamp() is one of the most useful CSS functions for fluid design.

                It allows a value to have:

                    -minimum
                    -preferred/fluid value
                    -maximum

                syntax:

                    property: clamp(minimum, preferred, maximum);

                example:    

                    h1 {
                        font-size: clamp(2rem, 5vw, 4rem);
                    }

                    here,
                        Minimum → 2rem
                        Preferred → 5vw
                        Maximum → 4rem

                The browser adjusts the value according to the viewport while respecting the minimum and maximum limits.

# CSS Transitions & Animations

    CSS provides two important ways to create movement and visual effects:

        Transition ---> Smoothly changes a property from one state to another.

        Animation ---> Creates multi stage of movements or change unsing the @kayframes.

        ### Transition

            A CSS transition makes a change between two CSS states happen smoothly instead of immediately.

            Without a transition:

                button {
                    background-color: black;
                }

                button:hover {
                    background-color: gray;
                }

                This results in transition.

                    Black
                    ↓
                    Gray

                With a transition:

                    Black
                    ↓
                   dark gray
                    ↓
                    gray

                The browser creates the intermediate values automatically.

            ### Basic transition Property

                syntax

                    transition: property duration;

                Example

                    button {
                        background-color: black;
                        transition: background-color 0.3s;
                    }

                    button:hover {
                        background-color: gray;
                    }

                    When background-color changes, make the change happen over 0.3 seconds.

                #### Transition Duration

                    The duratio specifies how long the transition takes.

                    button {
                        transition: background-color 1s;
                    }

                    The transition takes 1 second.

                    example:

                        0.2s fast

                        0.5s moderate
                        
                        2s slow


                    Common UI values

                        For normal websites, you will commonly use:

                            0.2s
                            0.3s
                            0.4s
                            0.5s
                    
                    ### Transition Multiple Properties

                        we can transition more than one CSS property.

                            button {
                                background-color: black;
                                color: white;
                                transform: scale(1);

                                transition:
                                    background-color 0.3s,
                                    color 0.3s,
                                    transform 0.3s;
                            }

                            button:hover {
                                background-color: white;
                                color: black;
                                transform: scale(1.05);
                            }

                        when the mouse enters the button    

                            Background → black → white
                            Text       → white → black
                            Size       → normal → slightly larger

                            All three changes happen smoothly.

                    ### transition-property

                        Instead of writing the shorthand immediately, you can use the individual properties.

                       button {
                            transition-property: background-color;
                        } 

                        example

                            button {
                                background-color: black;
                                transition-property: background-color;
                                transition-duration: 0.3s;
                            }

                            button:hover {
                                background-color: gray;
                            }

                    ### transition-duration

                        specifies how long the transition should take.  

                        example

                            button {
                                transition-property: background-color;
                                transition-duration: 0.3s;
                            }

                    ### transition-delay

                        transition-delay specifies how long the browser should wait before starting the transition.

                        button{
                            transition:background-color 0.3s;
                            transition-delay:1s;
                        }

                    ### transition-timing-function

                        This controls how the speed changes during the transition.

                        common values are 

                            -ease
                            -linear
                            -ease-in
                            -ease-out
                            -ease-in-out

                        ease

                            transition: transform 0.5s ease;

                            Starts slowly, moves faster, then slows down.

                            This is commonly used for UI elements.

                            Elements:

                                transition: transform 0.5s ease;

                        linear

                            transition: transform 0.5s linear;

                            The movement happens at a constant speed.

                            Example:

                                transition: transform 0.5s linear;

                        ease-in

                            transition: transform 0.5s ease-in;

                            Starts slowly and becomes faster.

                            Example:

                                transition: transform 0.5s ease-in;

                        ease-out

                            transition: transform 0.5s ease-out;

                            Starts quickly and slows down near the end.

                            Example:

                                transition: transform 0.5s ease-out;

                        ease-in-out

                            transition: transform 0.5s ease-in-out;

                            Starts slowly, becomes faster, then slows down.

                            Example:    

                                transition: transform 0.5s ease-in-out;

                    ### Properties Can Be Transitioned

                        Many visual properties can be transitioned.

                            -background-color
                            -color
                            -opacity
                            -width
                            -height
                            -transform
                            -border-color
                            -box-shadow

                        Example:

                            .card {
                                box-shadow: none;
                                transition: box-shadow 0.3s ease;
                            }

                            .card:hover {
                                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                            }

                    ### Animation

                        A CSS animation allows an element to change its styles through multiple stages.

                        Unlike a simple transition, an animation does not require a state such as :hover.

                        These stages are defined using the @keyframes.

                        ### @keyframes

                            @keyframes defines the different stages of an animation.

                            syntax:

                                @keyframes animation-name {

                                    from {
                                        /* starting styles */
                                    }

                                    to {
                                        /* ending styles */
                                    }

                                }

                            Example:

                                @keyframes moveBox {

                                    from {
                                        transform: translateX(0);
                                    }

                                    to {
                                        transform: translateX(200px);
                                    }

                                }

                        ### Applying an Animation

                            Creating @keyframes alone does not animate anything.

                            You need to apply the animation to an element.

                            .box{
                                width: 50px;
                                height: 50px;
                                background-color: black;
                                animation: moveBox 2s;
                            }

                            @keyframes moveBox{
                                from{
                                    transform: translateX(0);
                                }
                                to{
                                    transform: translateY(200px);
                                }
                            }

                            #### % keyframes

                                Instead of from to,we can use the 

                                    0%
                                    25%
                                    50%
                                    75%
                                    100%

                                Example:

                                    @keyframes moveBox {

                                        0% {
                                            transform: translateX(0);
                                        }

                                        50% {
                                            transform: translateX(200px);
                                        }

                                        100% {
                                            transform: translateX(0);
                                        }

                                    }

                                    This allows much more control.

                            #### Animation Duration

                                .box {
                                    animation-name: moveBox;
                                    animation-duration: 2s;
                                }
                                
                            #### Animation-iteration-count

                                Controls how many times the animation runs.

                                Once

                                    animation-iteration-count: 1;
                                
                                Three

                                    animation-iteration-count: 3;

                                Forever

                                    animation-iteration-count: infinite;

                            #### animation-direction

                                Controls the direction in which the animation plays.

                                common valus are

                                    normal
                                    reverse
                                    alternate
                                    alternate-reverse

                                normal

                                    animation-direction: normal;

                                    start ---> End

                                reverse

                                    animation-direction: reverse;

                                    End ---> start

                                alternative

                                    animation-direction:alternative;

                                    start ---> end ---> start ---> end

                                    This is useful for continuous movement.

                            #### animation-delay

                                Waits before starting the animation.

                                .box {
                                    animation: moveBox 2s;
                                    animation-delay: 1s;
                                }

                                The browser waits 1 second before starting.

                            #### animation-timing-function

                                Just like transitions, animations can use:

                                    ease
                                    linear
                                    ease-in
                                    ease-out
                                    ease-in-out

                                Example:    

                                    .box {
                                        animation: moveBox 2s ease-in-out;
                                    }

                            #### animation-fill-mode

                                This controls what styles the element keeps before or after the animation.

                                common values are:

                                    -none
                                    -forwards
                                    -backwards

                                The most useful value

                                    animation-fill-mode: forwards;

                                Example:    

                                    .box {
                                        animation: moveBox 2s forwards;
                                    }

                                    After the animation finishes, the element keeps the styles from the final keyframe.

                                    Without forwards, it normally returns to its original CSS state.

# CSS Transform

    CSS Transform allows you to visually change the position, size, rotation, or shape of an element without changing the normal document flow.

    Transforms can be used to:

        -Move an element
        -Increase or decrease its size
        -Rotate an element
        -Skew an element
        -Create 3D effects

        The property is transform:

            .box {
                transform: scale(1.2);
            }

            The box becomes 20% larger visually.

    Why do we Use Transforms?

        Transforms are commonly used for interactive and visual effects.

        For Example,on an e-commerce Website:

            .card {
                transition: transform 0.3s ease;
            }

            .card:hover {
                transform: translateY(-5px);
            }

            Here,

                Here:

                    transform performs the movement.
                    transition makes the movement smooth.

    ### Types of CSS Transforms

        CSS transforms can be divided into:

            2D Transforms
                translate()
                translateX()
                translateY()
                scale()
                scaleX()
                scaleY()
                rotate()
                skew()

            3D Transforms
                translateZ()
                scaleZ()
                rotateX()
                rotateY()
                rotateZ()
                perspective()


            translate()

                translate() moves an element from its original position.

                transform: translate(x, y);

                for example:    

                    .box {
                        transform: translate(50px, 30px);
                    }

            translateX()

                translateX() moves an element horizontally.

                Syntax

                    transform: translateX(value);

                Example:    

                    .box {
                        transform: translateX(100px);
                    }

                The element moves 100px to the right.

            
            translateY()

                translateY() moves a element vertically.

                Syntax:

                    transform:translateY(value);

                Example:    

                    .box {
                        transform: translateY(50px);
                    }

                Moves the element 50px downward.

                Negative values move it upward. 

                    transform: translateY(-50px);

            Scale()

                scale() changes the size of a element.

                Syntax:

                    trasform:scale(value);

                Example:    

                    .box{
                        transform:scale(1.5);
                    }

                the element become 1.5 times than its original size.

                scale(!) ---> original size

                scale(2) ---> Twice the size

                scale(0.5) ---> Half the size

            scaleX()

                scale(x) changes the width visually.

                .box {
                    transform: scaleX(2);
                }

                The element become twice as wide.

                It changes the horizontal scale,not the vertical scale.

            scaleY()

                scaleY() changes the height visually

                .box {
                    transform: scaleY(2);
                }

                The element become twice as tall.

            rotate()

                rotate() rotates an element around its center by default.

                Syntax:

                    transform: rotate(angle);

                Example:    

                    .box {
                        transform: rotate(45deg);
                    }

                    The element rotates 45 degree clockwise.

                Negative rotation

                    transform: rotate(-45deg);

                    negative value rotates in the opposite direction.

                    45deg   → clockwise
                    -45deg  → counter-clockwise

            skew()

                skew() slants an element.

                Syntax:

                    transform: skew(x, y);

                Example:    

                    .box {
                        transform: skew(20deg, 10deg);
                    }

                    The element becomes visually slanted.

                Skew is commonly used for:

                    -Decorative designs
                    -Modern banners
                    -Buttons
                    -Hero sections
                    -Graphic effects

            skewX()

                skewX() slants the element horizontally.

                .box {
                    transform: skewX(20deg);
                }

                Only the x-axis is affected.

            skewY()

                skewY()  slants the element vertically.

                .box {
                    transform: skewY(20deg);
                }

                Only the Y-axis is affected.

            Transform Origin

                By default, transforms happen around the center of an element.

                You can change the point around which the transformation happens using:                        

                    transform-origin

                Example:

                    .box {
                        transform-origin: left center;
                        transform: rotate(20deg);
                    }

                Common Values:

                    transform-origin: center;
                    transform-origin: top;
                    transform-origin: bottom;
                    transform-origin: left;
                    transform-origin: right;
                    transform-origin: top left;

# 3D Transforms

    CSS also supports transformations in three dimensions.

    Instead of only:

        X → horizontal
        Y → vertical

    3D introduces:  

        Z → depth

        ## translateZ()

            Moves an element along the Z-axis.

            .box {
                transform: translateZ(50px);
            }

            However, to visibly demonstrate 3D movement, you generally need a perspective context.


        ## rotateX()

            Rotates an element around the X-axis.

            .box {
                transform: rotateX(45deg);
            }

        ## rotateY()

            Rotates an element around the Y-axis.

            .box {
                transform: rotateY(45deg);
            }

            This creates a left/right 3D rotation.

            It is commonly used for:

                Product cards
                Flip cards
                Image galleries
                3D UI effects

        ## rotateZ()

            rotateZ() rotates around the Z-axis.

            .box {
                transform: rotateZ(45deg);
            }

            For normal 2D rotation, this produces a result similar to:

                transform: rotate(45deg);

# CSS Custom Properties (CSS Variables)

    CSS Custom Properties, commonly called CSS Variables, allow us to store reusable CSS values in one place and use those values throughout a stylesheet.

    Example:

        button {
            background-color: #333;
        }

        header {
            background-color: #333;
        }

        footer {
            background-color: #333;
        }

        instead of the above we can create a variable:

            :root {
                --main-color: #333;
            }
        
        reuse it:

            button {
                background-color: var(--main-color);
            }

            header {
                background-color: var(--main-color);
            }

            footer {
                background-color: var(--main-color);
            }

            all elements using that variable can update automatically.

    ## Why Do We Need CSS Variables?

        a website has the same brand color in 20 different places.

            .header {
                background-color: #222;
            }

            .button {
                background-color: #222;
            }

            .footer {
                background-color: #222;
            }

            .navbar a {
                color: #222;
            }

            if we use the variable: 

                :root {
                    --brand-color: #222;
                }

            Define once ---> Reuse everywhere ---> Change in one place

    ## Creating a CSS Custom Property

        CSS custom properties start with two hyphens(--).

        Syntax:

            --variable-name: value;

        Example:    

            --main-color: #333;

            --font-size:20px;

            --spacing:30px;

        The variable name can be anything but meaningfull is recommeneded.

        :root

            :root {
                --main-color: #333;
                --text-color: #222;
                --spacing: 20px;
            }

            :root represents the root element of the HTML document.

            for an HTML document,the root element is <html>

    ## CSS variable

        To use a variable,We use:

            var()

            syntax: 

                var(--variable-name)

            Example:    

                :root {
                    --main-color: #333;
                }

                button {
                    background-color: var(--main-color);
                }

    ## Variable can store Different Types of Values

        CSS custom properties aren't limited to colors.

        They can store many CSS Values.

        Color:

            :root {
                --primary-color: #333;
            }

        Font Size

            :root {
                --heading-size: 32px;
            }

        Spacing:

            :root {
                --section-padding: 60px;
            }

        Border radius:

            :root {
                --border-radius: 10px;
            }

        Font Family

            :root {
                --main-font: Arial, sans-serif;
            }

    ## Using Multiple Variable

        A real website usually has several variables.

        :root {
            --primary-color: #222;
            --secondary-color: #f5f5f5;
            --text-color: #333;
            --white: #ffffff;

            --spacing-small: 10px;
            --spacing-medium: 20px;
            --spacing-large: 50px;

            --border-radius: 8px;
        }

        We can use them:

            button {
            background-color: var(--primary-color);
            color: var(--white);
            padding: var(--spacing-small) var(--spacing-medium);
            border-radius: var(--border-radius);
        }

        This makes the CSS easier to maintain 
        
    ## Local CSS Variables

        Variables don't always have to be global.

        You can define a variable inside a specific element.

        Example:    

            .card {
                --card-color: blue;
            }

            now we can use the --card-color inside another element.

            .card {
                --card-color: blue;
            }

            .card h2 {
                color: var(--card-color);
            }

            .card a {
                color: var(--card-color);
            }    

            The variable is available inside that element's scope.

    ## Global vs Local Variables

        Global variable

            :root {
                --main-color: blue;
            }            

            Available throughout the document.

        Local Variable

            .card {
                --card-color: blue;
            }

        Primarily available within .card and its descendants.

        A variable defined in :root can be used throughout.

        A variable defined inside .card is scoped to that part of the document.

    ## Changing a Variable Locally

        One powerful feature is that a local value can override the inherited value.

        Example:    

            :root {
                --button-color: black;
            }

            .card {
                --button-color: blue;
            }

            .button {
                background-color: var(--button-color);
            }

        A button inside .card will use

            blue

        While a button outside .card will use 

            black

        This is due to CSS variable participate in the cascade.


    ## Fallback values

        What happens if a variable doesn't exist?

        You can provide a fallback value.

        Syntax:

            var(--variable, fallback-value)

        Example:    

            button {
                background-color: var(--button-color, black);
            }

            This means:

                Use --button-color if it exists. Otherwise use black.

    ## CSS Variable with calc()

        CSS Variable can also be used with calculations.

        Example:    

            :root {
                --spacing: 20px;
            }

            .card {
                padding: calc(var(--spacing) * 2);
            }

            The browser calculates:

                20px * 2 = 40px

            so padding:40px;


    ## CSS Variable with clamp()

        :root{
            --heading-size:clamp(2rem,5vw,4rem);
        }

        h1{
            font-size:var(--heading-size);
        }

        Now the responsive heading size is stored in one reusable variable.

    ## Creating a Theme

        One of the biggest real-world uses of CSS variables is theming.

        For example, create a light theme:

            :root {
                --background-color: white;
                --text-color: #222;
                --primary-color: #333;
            }

        Then:

            body {
                background-color: var(--background-color);
                color: var(--text-color);
            }

            button {
                background-color: var(--primary-color);
            }

        For Dark Theme,we can override the variables;   

            .dark-theme {
                --background-color: #222;
                --text-color: white;
                --primary-color: #444;
            }

            HTML 

                <body class="dark-theme">

        Now all elements using the variables can change according to the theme.

    ## Advantages of CSS Custom Properties

        1. Reusability

            Define once and use many times.

        2. Easy maintenance

            Change a value in one place.

        3. Theming

            Easy to create light and dark themes.

        4. Consistency

            The same color, spacing, or font size can be reused throughout the website.

        5. Responsive design

            Variables can work with:
        
        6. Component customization

            Different components can override variables locally.
    
# Pseudo-Classes & Pseudo-elements

    Introduction

        CSS selectors normally target HTML elements directly:

        p {
            color: black;
        }

        But sometimes we need to style an element based on something more specific.

        For Example:    

            -Style a button when the mouse is over it.
            -Style an input when the user clicks into it.
            -Select every second product.
            -Style the first paragraph differently.

        CSS Provides two special selector mechanisms for this   

            Pseudo-classes ---> Select an element based on its state or condition.

            Pseudo-element ---> Select a part of an element or create cosmetic content.

        Pseudo-classes: 

            A pseudo-class is a CSS keyword that allows you to select an element based on a particular state, condition, or position.

            Pseudo-classes start with a single colon (:).

            Syntax:

                selector:pseudo-class {
                    property: value;
                }

            Example:

                button:hover {
                    background-color: black;
                }

            here hover is a pseudo-class.

            Apply these styles when the user is hovering over the button.

        Why we need Pseudo-classes?

            Without pseudo-classes, CSS would have difficulty responding to user interaction or selecting elements based on their position.

            button:hover {
                background-color: black;
            }

            allows the website to respond to the user's mouse.

            This is why pseudo-classes are heavily used in modern websites.

        Common Pseudo-Classes are:

            :hover
            :focus
            :active
            :visited
            :first-child
            :last-child
            :nth-child()
            :not()
            :checked
            :disabled

        :hover

            :hover applies styles when the user's pointer is over an element.

            Example:

                <button>Shop Now</button>

                button:hover {
                    background-color: black;
                    color: white;
                }

            Real time use:  

                Very common for:

                    -Buttons
                    -Navigation links
                    -Product cards
                    -Images
                    -Icons

        :focus

            :focus applies when an element receives keyboard focus or user interaction focus.

            It is especially important for form elements.

            Example:    

                input:focus {
                    border-color: black;
                    outline: none;
                }

                <input type="text" placeholder="Enter your name">

                The input receives focus.

                Why is :focus important?

                    It helps users understand:

                "Which input am I currently using?"

                    It is also important for keyboard accessibility.

            :active

                :active applies while an element is being activated.

                Example:    

                    button:active {
                        transform: scale(0.95);
                    }

                When the user presses the button,This can create a button-press effect.

            :visited

                :visited applies to links that the user has already visited.

                a:visited {
                    color: purple;
                }

                <a href="https://example.com">Visit Website</a>

                After the user visits that link, the browser can style it differently.

                This is mainly useful for links.

            :first-child

                :first-child selects an element if it is the first child of its parent.

                <div>
                    <p>First paragraph</p>
                    <p>Second paragraph</p>
                    <p>Third paragraph</p>
                </div>

                p:first-child {
                    color: red;
                }

                First paragraph ---> red
                Second paragraph ---> normal
                Third paragraph ---> normal

                :first-child checks whether the element is the first child of its parent.

            :last-child

                :last-child selects an element if it is the last child of its parent.

                p:last-child {
                    color: blue;
                }

                <div>
                    <p>First paragraph</p>
                    <p>Second paragraph</p>
                    <p>Last paragraph</p>
                </div>

                First paragraph
                Second paragraph
                Last paragraph ---> blue

            :nth-child()

                :nth-child() allows you to select an element based on its position among its siblings.

                selector:nth-child(number) {
                    property: value;
                }

                Example:    

                    p:nth-child(2) {
                        color: red;
                    }

                1 ---> First paragraph
                2 ---> Second paragraph ---> selected
                3 ---> Third paragraph

            :nth-child(even)

                We can select even-numbered children.

                .product-card:nth-child(even) {
                    background-color: #f5f5f5;
                }

                Product 1 ---> normal
                Product 2 ---> selected
                Product 3 ---> normal
                Product 4 ---> selected
                Product 5 ---> normal
                Product 6 ---> selected

                This is useful for creating alternating layouts.


            :nth-child(odd)

                Selects odd-numbered children.

                .product-card:nth-child(odd) {
                    background-color: #eeeeee;
                }

                1 ---> selected
                2 ---> normal
                3 ---> selected
                4 ---> normal
                5 ---> selected

            
            :not()

                :not() selects elements that do not match a particular selector.

                button:not(.primary) {
                    background-color: gray;
                }

                <button class="primary">Buy Now</button>
                <button>Cancel</button>
                <button>Close</button>

                Select buttons that do NOT have the .primary class.

                The second and third buttons are selected.

            :checked

                :checked selects a checkbox or radio button when it is selected.

                <input type="checkbox" id="terms">
                <label for="terms">
                    I agree to the terms
                </label>

                The pseudo-class becomes active when the checkbox is checked.

            :disabled

                :disabled selects disabled form controls.

                <button disabled>
                    Submit
                </button>

                button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                This visually tells the user that the button cannot currently be used.

# Pseudo-elements

    A pseudo-element allows you to style a specific part of an element or create a cosmetic piece of content.

    Pseudo-elements use two colons (::).

        p::first-letter {
            font-size: 30px;
        }

        This styles only the first letter of the paragraph.

        Common Pseudo-elements

            ::before
            ::after
            ::first-letter
            ::first-line
            ::selection

        ::before

            ::before creates a pseudo-element before the content of an element.

            h2::before {
                content: "★ ";
            }

            <h2>Featured Products</h2>

            The star was not written in the HTML.

            CSS created it.

        ::after

            ::after creates a pseudo-element after the content.

            h2::after {
                content: " bye";
            }

            <h2>Thank you</h2>

            Thank you bye

        ::first-letter

            Selects the first letter of text.

            Example:

                p::first-letter {
                    font-size: 40px;
                    font-weight: bold;
                }

                <p>StyleHub is a modern fashion store.</p>

               becomes larger---> S tyleHub is a modern fashion store.

        
        ::first-line
        
            p::first-line {
                font-weight: bold;
            }

            Selects the first line of text.

            The first line of the paragraph becomes bold.

            The exact text included in the first line depends on the available width and screen size.

        ::selection 

            ::selection styles the text when the user highlights it.

            Example:    

                ::selection {
                    background-color: black;
                    color: white;
                }

# CSS Architecture

    CSS Architecture is the way we organize and structure CSS Code in a project so that it remains clean,reusable,maintainable and predictable as the project grows.

    In a small project, we can write CSS freely. But when a website has many pages and hundreds of elements, poorly organized CSS can cause style conflicts and style bleeding.

    One popular methodology for organizing CSS is BEM. 

    Problem:

        <div class="card">
            <h2>Product Name</h2>
            <p>₹799</p>
        </div>

        .card h2 {
            color: red;
        }

        <div class="card">
            <h2>About Us</h2>
        </div>

        The same .card h2 rule may affect both cards.

        As the project becomes larger, CSS can become difficult to control.

        Common problems:

            -Styles accidentally affect unrelated elements
            -Class names become confusing
            -Changing one component can break another
            -CSS becomes difficult to reuse
            -Developers are afraid to modify existing CSS

            CSS architecture provides a system for organizing CSS.

    BEM:    

        BEM stands for:

        Block ---> Element ---> Modifier

        It is a naming methodology for creating CSS classes in a predictable way.

        The basic structure is: 

            -block
            -block__element
            -block--modifier

        Example:

            product
            product__image
            product__title
            product__price
            product--featured

        Block:

            A Block is an independent component or section of the UI.

            Example:    

                <div class="product"></div>

            here product is the block.

            Other Example:

                navbar
                button
                card
                product
                footer
                header

            Example:    

                <div class="product">
                    Product information
                </div>

                .product {
                    padding: 20px;
                    border: 1px solid #ddd;
                }

        Element:    

            An Element is a part of a block.

            BEM users:

                block__element

                Two underscores __ are used between the block and element.

            Example:    

                <div class="product">

                    <img class="product__image" src="product.jpg">

                    <h2 class="product__title">
                        Oversized T-Shirt
                    </h2>

                    <p class="product__price">
                        ₹799
                    </p>

                </div>

            product ---> Block
            product__image ---> Element
            product__title ---> Element
            product__price ---> Element

            CSS:    

                .product {
                    padding: 20px;
                }

                .product__image {
                    width: 100%;
                }

                .product__title {
                    font-size: 20px;
                }

                .product__price {
                    font-weight: bold;
                }

        Modifier

            A Modifier represents a variation or different state of a block or element.

            block--modifier

                Two hyphens -- are used for modifiers.

            Example:    

                Normal Feature  

                    <div class="product">

                Featured product

                    <div class="product product--featured">

                CSS

                    .product {
                        padding: 20px;
                        border: 1px solid #ddd;
                    }

                    .product--featured {
                        border: 2px solid black;
                    }

                    The second class modifies the appearance of the original block.

        Element Modifier

            We can also modify an element.

            <p class="product__price product__price--sale">
                ₹599
            </p>

            product       ---> Block
            product__price ---> Element
            product__price--sale ---> Modifier

            .product__price {
                font-size: 18px;
            }

            .product__price--sale {
                color: red;
            }

# CSS Preprocessors & Frameworks

    As CSS projects become larger, writing and maintaining CSS manually can become time-consuming. CSS preprocessors and CSS frameworks provide tools and features that can make CSS development faster and more organized.

    Two popular approaches are:

        -Sass — a CSS preprocessor
        -Tailwind CSS — a utility-first CSS framework

    # What are CSS Preprocessor?

        A CSS preprocessor is a tool that allows developers to write CSS using additional features that are not available in traditional CSS.

        The preprocessor then converts the code into normal CSS that browsers can understand.

        The browser does not directly understand Sass.

        It understands the CSS generated by Sass.

    # What is Sass?

        Sass stands for Syntactically Awesome Style Sheets.

        Sass code is written in a specific file with a .scss or .sass extensions.

        Helps developer to write more modular and reusable code,which can helps to reduce the amount of code needed and improve the maitainability of a project.

            Sass is a CSS preprocessor that adds features such as:

            Variables
            Nesting
            Mixins
            Functions
            Partial files
            Imports/modules
            Reusable styles
            Mathematical operations

            .sass extensions is used

            Sass code is processed by a Sass compiler and converted into regular CSS, which the browser can understand.

            ##What is SCSS?

                SCSS stands for Sassy CSS.

                SCSS is one of the two syntaxes of Sass.

                SCSS uses the same curly braces {} and semicolons ; that are used in normal CSS.

                example:

                    $primary-color: blue;

                    .button {
                        background-color: $primary-color;
                        color: white;
                    }

                    The above SCSS is compiled into CSS:

                    .button {
                        background-color: blue;
                        color: white;
                    }

                    Because SCSS looks very similar to CSS, it is usually easier for CSS developers to learn.

        # Sass Has Two Syntaxes

            1. SCSS uses:

                {} curly braces
                ; semicolons
                CSS-like syntax

                example:

                    .button {
                        color: white;
                        background-color: blue;
                    }

                SCSS is very close to normal CSS.

                example

                    .button {
                        color: white;
                    }

                And the same structure of css

                    .button {
                        color: white;
                    }

                SCSS simply adds additional Sass features.

            2. Indented Sass Syntax

                The original Sass syntax uses indentation instead of {} and ;.

                example:

                    .button
                        color: white
                        background-color: blue

                Here:

                    {} are not used
                    ; is not used
                    Indentation defines the structure

                    Therefore, indentation is very important in .sass files.

        

        # Sass Variable

            :root {
                --primary-color: #222;
            }

            Sass:

                $primary-color: #222;
                $text-color: white;

                button {
                    background-color: $primary-color;
                    color: $text-color;
                }

            after compiling it becomes normal CSS

                button {
                    background-color: #222;
                    color: white;
                }

        # Sass nesting

            Normal css

                button {
                    background-color: #222;
                    color: white;
                }

            Sass allows us to nest related s    electors:

                .navbar {
                display: flex;

                    a {
                        text-decoration: none;

                        &:hover {
                            color: red;
                        }
                    }
                }

            The & represents the parent selector.

            .button {
                &:hover {
                    background-color: black;
                }
            }

    # Sass Mixins

        A mixin is a reusable group of CSS declarations.

        button {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .card {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        using the mixin:    

            @mixin center-content {
            display: flex;
            align-items: center;
            justify-content: center;
            }

        reuse it 

            button {
                @include center-content;
            }

            .card {
                @include center-content;
            }

    # Sass Function 

        Sass provides functions that can perform calculations or manipulate values.

        Example:    

            $base-size: 16px;

            .title {
                font-size: $base-size * 2;
            }

            gives:  

                .title {
                    font-size: 32px;
                }

    # What is CSS Framework?    

        A CSS framework is a collection of predefined CSS styles, utilities, components, or design patterns that help developers build interfaces faster.

        Instead of creating every style from scratch, developers can use classes or components provided by the framework.

        Examples include:

            -Tailwind CSS
            -Bootstrap
            -Foundation
            -Bulma

        #Tailwind CSS

            Tailwind CSS is a utility-first CSS framework.

            Instead of creating a custom class such as:

                .button {
                    padding: 10px 20px;
                    background-color: black;
                    color: white;
                }

            Tailwind allows us to compose utility classes directly in HTML:

                <button class="px-5 py-2 bg-black text-white">
                    Buy Now
                </button>

            ## Utility-First CSS

                Utility-first means using small classes that perform one specific styling task.

                <div class="flex items-center justify-center">

            ## Tailwind Responsive Design

                Tailwind also provides responsive utility classes.

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                equal to

                    .product-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                    }

                    @media (min-width: 768px) {
                        .product-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }

                    @media (min-width: 1024px) {
                        .product-grid {
                            grid-template-columns: repeat(4, 1fr);
                        }
                    }

                    Tailwind provides predefined utility classes so developers don't have to write all of this CSS manually.

            ## Tailwind Hover States

                Tailwind also provides utilities for states.

                <button class="bg-black text-white hover:bg-gray-700">
                    Shop Now
                </button>

                utility applies the background color when the user hovers over the button.

                equal to

                    button {
                        background-color: black;
                        color: white;
                    }

                    button:hover {
                        background-color: #374151;
                    }

            ## Traditional CSS:

                    .button {
                        background-color: blue;
                        color: white;
                        padding: 10px 20px;
                        border-radius: 5px;
                    }

                    <button class="button">Click Me</button>

                Using the Tailwind

                    <button class="bg-blue-500 px-5 py-2 text-white rounded">
                        Click Me
                    </button>

                    bg-blue-500 ---> background color
                    px-5 ---> horizontal padding
                    py-2 ---> vertical padding
                    text-white ---> text color
                    rounded ---> border radius


        # Colors

            Tailwind provides utility classes for applying colors.

            Text colors

                <p class="text-red-500">Red Text</p>

                <p class="text-blue-500">Blue Text</p>

                <p class="text-green-500">Green Text</p>

            
            Background Color

                <div class="bg-blue-500">
                    Blue Background
                </div>



        # Typography

            Tailwind provides utility classes for controlling text size, weight, and alignment.

            ## Font size

                <h1 class="text-4xl">
                    Large Heading
                </h1>

                <p class="text-lg">
                    Large paragraph
                </p>

                <p class="text-sm">
                    Small paragraph
                </p>


                Common values are:

                    text-xs
                    text-sm
                    text-base
                    text-lg
                    text-xl
                    text-2xl
                    text-3xl
                    text-4xl

            ## Font Weight

                <p class="font-normal">Normal</p>

                <p class="font-semibold">Semi Bold</p>

                <p class="font-bold">Bold</p>

            ## Text Alignment

                <p class="text-left">Left</p>

                <p class="text-center">Center</p>

                <p class="text-right">Right</p>

            ## Padding

                <div class="p-4">
                    Content
                </div>

                Common Utilities are:

                    p-4   ---> all sides
                    px-4  ---> left + right
                    py-4  ---> top + bottom
                    pt-4  ---> top
                    pb-4  ---> bottom
                    pl-4  ---> left
                    pr-4  ---> right

            ## Margin

                Margin creates space outside an element.

                <div class="m-4">
                    Content
                </div>

                Common utilities are:

                    m-4   ---> all sides
                    mx-4  ---> left + right
                    my-4  ---> top + bottom
                    mt-4  ---> top
                    mb-4  ---> bottom
                    ml-4  ---> left
                    mr-4  ---> right

            ## Width and Height

                Tailwind provides utilities for controlling element dimensions.

                <div class="w-full h-64">
                    Box
                </div>

                w-full
                w-1/2
                w-screen
                w-64

            ## Flexbox

                Tailwind provides utility classes for CSS Flexbox.

                <div class="flex">
                    <div>One</div>
                    <div>Two</div>
                    <div>Three</div>
                </div>

                class="flex"  === display: flex;

                ## Direction    

                    <div class="flex flex-row">

                    <div class="flex flex-col">

                    flex-col arranges items vertically.

                    flex-row arranges items Horizontally.

                ## Alignment

                    <div class="flex items-center"> === align-items: center;

                    <div class="flex justify-center"> ===  justify-content: center;

                # Gap

                    <div class="flex gap-4">

                    gap-4 adds space between the flex items.


                ## Common Flexbox utilities

                    items-start
                    items-center
                    items-end

                    justify-start
                    justify-center
                    justify-end
                    justify-between
                    justify-around
                    justify-evenly

            ## Grid

                Tailwind also provides utilities for CSS Grid.

                <div class="grid grid-cols-3 gap-4">

                    <div>Product 1</div>
                    <div>Product 2</div>
                    <div>Product 3</div>

                    <div>Product 4</div>
                    <div>Product 5</div>
                    <div>Product 6</div>

                </div>

                grid          ---> display: grid
                grid-cols-3   ---> 3 columns
                gap-4         ---> gap between items


            ## Responsive Design

                Tailwind uses responsive prefixes to apply styles at different screen sizes.

                Common prefixes:    

                    sm:
                    md:
                    lg:
                    xl:
                    2xl:

                    <p class="text-sm md:text-lg lg:text-2xl">
                        Responsive Text
                    </p>

                    here,

                        Small screen  ---> text-sm
                        Medium screen ---> text-lg
                        Large screen  ---> text-2xl

            ## Responsive Grid

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                here,

                    Mobile  ---> 1 column
                    Tablet  ---> 2 columns
                    Desktop ---> 3 columns

            ## Hover and Focus

                Tailwind uses variants to style different element states.

                Common varients:

                    hover:
                    focus:
                    active:
                    disabled:

                Hover:

                    <button class="bg-blue-500 hover:bg-blue-700">
                        Buy Now
                    </button>

                    normally button in the color of blue-500,when we hover it becomes blue-700

                Focus:  

                    <input class="border focus:border-blue-500">

                    When the input receives focus, its border becomes blue.

            ## Border Radius

                Tailwind provides utilities for rounded corners.

                <div class="rounded">
                    Box
                </div>

                Common values are:
                    rounded-sm
                    rounded
                    rounded-lg
                    rounded-xl
                    rounded-full

                <button class="rounded-lg">
                    Login
                </button>

            # Box shadow

                Tailwind provides shadow utilities.

                <div class="shadow">
                    Card
                </div>

                Common values are:  

                    shadow-sm
                    shadow
                    shadow-md
                    shadow-lg
                    shadow-xl

        # Borders

            Tailwind provides utility classes to add and customize borders around elements.

            Adding a Border

                Use the border class.

                <div class="border">
                    Product Card
                </div>

                This adds a default border around the element.

            ## Border Width

                You can control the thickness of the border.

                <div class="border">1px Border</div>

                <div class="border-2">2px Border</div>

                <div class="border-4">4px Border</div>

                <div class="border-8">8px Border</div>

            ## Border Color

                Use border-{color}-{shade}.

                    <div class="border border-red-500">
                        Red Border
                    </div>

                    <div class="border border-blue-500">
                        Blue Border
                    </div>

                    <div class="border border-gray-300">
                        Gray Border
                    </div>

                Example:

                    <div class="border-2 border-blue-500 p-4">
                        Product Card
                    </div>

                    here,

                        border-2 ---> border thickness
                        border-blue-500 ---> border color
                        p-4 ---> padding



            ## Border Specific size

                we can apply a border only to a particular side.

                    <div class="border-t">Top Border</div>

                    <div class="border-b">Bottom Border</div>

                    <div class="border-l">Left Border</div>

                    <div class="border-r">Right Border</div>

                <div class="border-b border-gray-300 p-4">
                    Product Information
                </div>


            ## Removing a Border

                Use border-0

                <div class="border-0">
                    No Border
                </div>

                removes the border top:

                    <div class="border border-t-0">
                        Border except top
                    </div>
        
        # Divide utilities

            Tailwind also provides divide-* utilities for adding borders between child elements.

            <div class="divide-y divide-gray-300">
                <div class="p-4">Product 1</div>
                <div class="p-4">Product 2</div>
                <div class="p-4">Product 3</div>
            </div>

            use case:   

                Real-time use

                    -navigation menus
                    -product lists
                    -settings pages
                    -order lists
                    -tables