const Header = () => {
  return (
    <header>
      <div className='header-top'>
        <div className='container'>
          <ul className='header-social-container'>
            <li>
              <a href='#' className='social-link'>
                <ion-icon name='logo-facebook'></ion-icon>
              </a>
            </li>
            <li>
              <a href='#' className='social-link'>
                <ion-icon name='logo-twitter'></ion-icon>
              </a>
            </li>
            <li>
              <a href='#' className='social-link'>
                <ion-icon name='logo-instagram'></ion-icon>
              </a>
            </li>
            <li>
              <a href='#' className='social-link'>
                <ion-icon name='logo-linkedin'></ion-icon>
              </a>
            </li>
          </ul>
          <div className='header-alert-news'>
            <p>
              <b>Free Shipping</b> This Week Order Over - $55
            </p>
          </div>
          <div className='header-top-actions'>
            <select name='currency'>
              <option value='usd'>USD &dollar;</option>
              <option value='eur'>EUR &euro;</option>
            </select>
            <select name='language'>
              <option value='en-US'>English</option>
              <option value='es-ES'>Español</option>
              <option value='fr'>Français</option>
            </select>
          </div>
        </div>
      </div>
      <div className='header-main'>
        <div className='container'>
          <a href='#' className='header-logo'>
            <img
              src='./assets/images/logo/logo.svg'
              alt="Anon's logo"
              width='120'
              height='36'
            />
          </a>
          <div className='header-search-container'>
            <input
              type='search'
              name='search'
              className='search-field'
              placeholder='Enter your product name...'
            />
            <button className='search-btn'>
              <ion-icon name='search-outline'></ion-icon>
            </button>
          </div>
          <div className='header-user-actions'>
            <button className='action-btn'>
              <ion-icon name='person-outline'></ion-icon>
            </button>
            <button className='action-btn'>
              <ion-icon name='heart-outline'></ion-icon>
              <span className='count'>0</span>
            </button>
            <button className='action-btn'>
              <ion-icon name='bag-handle-outline'></ion-icon>
              <span className='count'>0</span>
            </button>
          </div>
        </div>
      </div>
      <nav className='desktop-navigation-menu'>
        <div className='container'>
          <ul className='desktop-menu-category-list'>
            {/* Add your menu items here */}
          </ul>
        </div>
      </nav>
      <div className='mobile-bottom-navigation'>
        {/* Add your mobile bottom navigation buttons here */}
      </div>
      <nav className='mobile-navigation-menu has-scrollbar' data-mobile-menu>
        {/* Add your mobile navigation menu items here */}
      </nav>
    </header>
  );
};

export default Header;
