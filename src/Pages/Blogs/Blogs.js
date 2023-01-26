import React from 'react';

const Blogs = () => {
    return (
        <div className="container mx-auto p-4 lg:p-0 mt-10 lg:mt-20 mb-20 lg:w-2/4">
            <h2 className="text-secondary text-4xl font-bold text-center mb-9">
                Our Blogs
            </h2>
            <div>
                <div className="mb-6">
                    <h2 className="text-primary text-4xl">
                        How will you improve the performance of a React
                        Application?
                    </h2>
                    <p>
                        We can use cdn links instead of hard coded files to
                        improve react application performance. Internally, React
                        employs a variety of innovative strategies to reduce the
                        quantity of expensive DOM operations needed to refresh
                        the UI. Using React will provide a quick user experience
                        for many projects without requiring any effort to
                        expressly optimize for speed. However, there are a
                        number of methods you can make your React application
                        faster.
                    </p>
                </div>
                <div className="mb-6">
                    <h2 className="text-primary text-4xl">
                        What are the different ways to manage a state in a React
                        application?
                    </h2>
                    <p>
                        Each React component comes with an internal state. This
                        state is an object that holds the component-specific
                        property values. Because every state change re-renders
                        all relevant components, state is able to maintain data
                        from various components in sync. By utilizing setState()
                        and including "local state" in a class, React's built-in
                        mechanism for establishing component states may be used.
                        There are other more methods for managing states in
                        React, such as: Context API for React, Hooks, Apollo
                        Link State But we'll concentrate on using the setState()
                        function.
                    </p>
                </div>
                <div className="mb-6">
                    <h2 className="text-primary text-4xl">
                        How does prototypical inheritance work?
                    </h2>
                    <p>
                        Every object has a secret internal property called
                        [[Prototype]] that is present along with its methods and
                        properties. Javascript has a feature called prototypal
                        inheritance that allows you to add methods and
                        attributes to objects. It is a technique that allows an
                        item to take on the attributes and operations of another
                        object. We often utilize Object.getPrototypeOf and
                        Object to get and change an object's [[Prototype]].
                    </p>
                </div>
                <div className="mb-6">
                    <h2 className="text-primary text-4xl">
                        Why you do not set the state directly in React?
                    </h2>
                    <p>
                        For example: if you have const [products, setProducts] =
                        useState([]). Why you do not set products = [...]
                        instead, you use the setProducts
                        <br />
                        <br />
                        There are some application performance related issue
                        that suggest us do not use the state directly. We
                        shouldn't change the state directly since React will
                        then look at the virtual DOM and have a copy of the
                        previous virtual DOM. This way, we may have two separate
                        object references in memory: the previous virtual DOM
                        and the current virtual DOM.
                    </p>
                </div>
                <div className="mb-6">
                    <h2 className="text-primary text-4xl">
                        What is a unit test? Why should write unit tests?
                    </h2>
                    <p>
                        Unit testing is a testing method in which the developer
                        personally tests individual modules to see if there are
                        any bugs. It is concerned with the independent modules'
                        functionality. The basic objective is to isolate each
                        component of the system in order to find, assess, and
                        correct any flaws.
                    </p>
                    <br />
                    <p>
                        Our code's unit tests serve as its documentation. They
                        make it possible for you to find issues early on in the
                        development process. Regression testing benefits greatly
                        from automated unit tests. Your codebase's code smells
                        are picked up by them.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
