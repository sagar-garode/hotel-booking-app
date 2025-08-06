# here i will keep track of all the new learnings

>how can you add meta description to each component (helps to improve SEO off an app)
>>we can use react-helemt library and use <Helemt> component at the start of each component
It has <meta> tag which allows to set description

>>What is scalable UI:
    UI/App that can grow in team, size, features without affecting the speed and performance of an app is Scalable UI
    Things/features that can help build scalable UI :
        Component reuasbility
        sepration of concerns
        Good folder structure
        good state management logic like redux or context

>>Full fledge scalable architecture
    It includes designing or crafting an entire application from building it from scratch, optimizing it using proper tools till deploying it using CI / CD
    Few Major things that we can keep track of is :
    1) Proper folder structure
    2) Component driven design -- everything is component and make sure to use best design patterns
    3) Good state management
    4) Centralized API Handling
    5) Proper Routing
    6) Good Authentication and Middleware
    7) Performance and scalabilty features
        -- code splitting
        -- lazy loading
        -- accessibilty
        -- code / image optimization
    8) CI / CD and proper testing
    9) Monorepp or MFE repo

>> Best practices of React Lead 
    -- Mon - Fri (Attend a daily standups and teem sync up to identify blockers and resolve issues)
    -- Assign tasks to team and prioritize the tasks
    -- Ensure unit test cases meet the threshold
    -- Prepare sprint end nodes
    -- take ownership of code revies and CI/CD stuffs
    -- If neded do pair programm with mid level or junior devs

>> Best practices for Security standards
XSS (Cross-Site-Scripting) is a attack where malicious/virus script are injected to steal data, tokens cookies
    1) use HTTP-only-cookie - prevent XSS scripts from reading javascript
    2) password hashing with bcrypt - avoids storing/leaking of real passwords
    3) enabling cors - controls which ddomain can access you app
    4) helmet adds extra security headers
        -- X-frame-options (prevents clickjacking)
        -- Content-Security-Policy (helps mitigate XSS)
    5) If using cookies we need CSRF protection (Prevents malicious websites from making api calls)
