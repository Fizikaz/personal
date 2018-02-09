import $ from 'jquery';

class MobileMenu {
    constructor () {
        this.siteHeader = $('.navbar');
        this.menuIcon = $('.navbar__menu-icon');
        this.menuContent = $('.navbar__list');
		  this.anchorLink = $('a[href*="#"]');
        this.events();
    }
    
    events() {
       this.menuIcon.click(this.toggleTheMenu.bind(this));
		 this.anchorLink.click(this.toggleTheMenu.bind(this));
    }
    
    toggleTheMenu() {
        this.menuContent.toggleClass('navbar__list--is--visible');
        this.siteHeader.toggleClass('navbar--is-expanded');
        this.menuIcon.toggleClass('navbar__menu-icon--close-x');
    }

}

export default MobileMenu;