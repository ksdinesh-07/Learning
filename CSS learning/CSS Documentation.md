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
                Simple way to remember

                Flexbox → one dimension

                Grid → two dimensions

                Grid Container and Grid Items

                CSS Grid has two important concepts:

                    Grid Container
                    Grid Items

                    Consider this HTML:

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

                Therefore:

                gap
                ↓
                Rows + Columns

                row-gap
                ↓
                Rows only

                column-gap
                ↓
                Columns only

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




                                    