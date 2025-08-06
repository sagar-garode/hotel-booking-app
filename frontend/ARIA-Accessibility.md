Accessibilty is importatnt to build websites for users with disability
so we have few aria attributes which follow or fulfil WCAG requirements or guildelines to meet accessibility

<!-- Few widely used aria attributes -->
aria-label >> use to define lebel to elements who dont have any label
aria-labelledby >> link an element with some other element
aria-checked >> shows if element is checked or not
aria-disabled >> tells if the element is disabbled or not
aria-selected >> shows which item in list or dropdown is selected
aria-role >> gives a specific role to element
aria-expanded >> tells if some section of element is expanded or not
aria- required  // aria-readonly

<!-- Difference between label / labelledby & describedby-->
aria-describedby gives some extra information about element


# Adobe analytics workflow explained -
A -- React components triggers events like page load / CTA clicked / link visted etc
B -- All data we push to adobe data layer window.adobeDataLayer <!-- Front end work ends here -->
C -- Adobe Launch Listens
D -- Fires the analytic event
E -- adobe analytics recieves and store on cloud        
F -- Analyst build reports in workspace