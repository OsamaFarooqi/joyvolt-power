/*
* Pipeline Theme
*
* Use this file to add custom Javascript to Pipeline.  Keeping your custom
* Javascript in this fill will make it easier to update Pipeline. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*
*/


// (function() {

//   // Below are example event listeners.  They listen for theme events that Pipeline
//   // fires in order to make it easier for you to add customizations.

//   // Keep your scripts inside this IIFE function call to avoid leaking your
//   // variables into the global scope.


//   document.addEventListener('theme:variant:change', function(event) {
//     // You might use something like this to write a pre-order feature or a
//     // custom swatch feature.
//     var variant = event.detail.variant;
//     var container = event.target;
//     if (variant) {
//       console.log('Container ———————— ↓');
//       console.log(container);
//       console.log('Variant —————————— ↓');
//       console.log(variant);
//       // ... update some element on the page
//     }
//   });

//   document.addEventListener('theme:cart:change', function(event) {
//     var cart = event.detail.cart;
//     if (cart) {
//       console.log('Cart ———————————— ↓');
//       console.log(cart);
//       // ... update an app or a custom shipping caluclator
//     }
//   });
//   // Fired when page loads to update header values
//   document.addEventListener('theme:cart:init', (e) => {
//     console.log('theme:cart:init');
//     console.log(e);
//   });

//   // Debounced scroll listeners.  Up and down only fire on direction changes
//   // These events are useful for creating sticky elements and popups.
//   document.addEventListener('theme:scroll', e => { console.log(e); });
//   document.addEventListener('theme:scroll:up', e => { console.log(e); });
//   document.addEventListener('theme:scroll:down', e => { console.log(e); });

//   // Debounced resize listener to bundle changes that trigger document reflow
//   document.addEventListener('theme:resize', e => { console.log(e); });

//   // Locks and unlocks page scroll for modals and drawers
//   // These are commented out because firing them will lock the page scroll
//   // the lock event must set `detail` to the modal or drawer body so the 
//   // scroll locking code knows what element should maintain scoll. 
//   // document.dispatchEvent(new CustomEvent('theme:scroll:lock', {bubbles: true, detail: scrollableInnerElement}));
//   // document.dispatchEvent(new CustomEvent('theme:scroll:unlock', {bubbles: true}));


//   // ^^ Keep your scripts inside this IIFE function call to avoid leaking your
//   // variables into the global scope.
// })();


 /*
 This function is for ESSENTIAL ADD-ON Start
*/
  
  setTimeout(() => {
     const checkboxes = document.querySelectorAll('input[id="add_ons_check"]');
      const buyItNowButton = document.querySelector('.product-page .product__submit .product__submit__quick');
      const addToCartButton = document.querySelector('.product-page .product__submit .btn--add-to-cart');
      // const paymentContainer = document.querySelector('.payments_buttons');
    
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    checkbox.closest('.product-clip').classList.add('add_ons_active');
                    
                     buyItNowButton.classList.add('disabled_this_button');
                     addToCartButton.classList.add('active_this_button');
                     // paymentContainer.classList.add('active_addT0Cart');
               
                } else {
                    checkbox.closest('.product-clip').classList.remove('add_ons_active');
                    if (Array.from(checkboxes).every(c => !c.checked)) {
                      // paymentContainer.classList.remove('active_addT0Cart');
                       buyItNowButton.classList.remove('disabled_this_button');
                       addToCartButton.classList.remove('active_this_button');
                    }
                }
            });
        });
   }, 2000);
/*
 This function is for ESSENTIAL ADD-ON End
*/

/*
 This function is for Header START
*/
const navLinks = document.querySelectorAll("a.navlink.navlink--grandchild");
const collectionContainers = document.querySelectorAll(".collection_container");

if (navLinks && collectionContainers) {
    if (navLinks.length > 0) {
        navLinks[0].classList.add("active_nav");
    }

    if (collectionContainers.length > 0) {
        collectionContainers[0].classList.add("active_nav");
    }

    const resetActiveLinks = () =>
        navLinks.forEach((link) => {
            link.classList.remove("active_nav");
        });

    const resetActiveCollections = () => {
        collectionContainers.forEach((collection) => {
            collection.classList.remove("active_nav");
        });
    };

    navLinks.forEach((link, index) => {
        link.addEventListener("mouseover", () => {
            resetActiveLinks();
            resetActiveCollections();

            link.classList.add("active_nav");

            const collectionContainerChild = collectionContainers[index];

            if (collectionContainerChild) {
                collectionContainerChild.classList.add("active_nav");
            }
        });
    });
}
/*
 This function is for Header END
*/



/* Search mobile on drawer */
let inputBox = document.querySelector('.input-box'),
  searchIcon = document.querySelector('.search'),
  closeIcon = document.querySelector('.close-icon');

searchIcon.addEventListener('click', () => {
  inputBox.classList.add('open');
});

closeIcon.addEventListener('click', () => {
  inputBox.classList.remove('open');
});



let sliderowButton = document.querySelector('button.sliderow'),
 drawerButton = document.querySelector('.sliderow.sliderow__back'),
 drawerExtended = document.querySelector('.drawer__extended');

sliderowButton.addEventListener('click', () => {
  drawerExtended.classList.add('hide_this');
});

drawerButton.addEventListener('click', () => {
  drawerExtended.classList.remove('hide_this');
});



