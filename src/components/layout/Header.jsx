import { useState } from 'react';
import {
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate, useLocation } from 'react-router-dom';
import useScrollDirection from '../../hooks/useScrollDirection';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { scrollY } = useScrollDirection();
  const navigate = useNavigate();
  const location = useLocation();

  const isHeaderFixed = scrollY > 100;

  const isHome = location.pathname === '/';
  const isDownloads = location.pathname === '/downloads';
  const isFee = location.pathname === '/fee_structure';

  const baseNavSx = (active) => ({
    fontSize: { md: '11px', lg: '13px', xl: '14px' },
    fontWeight: active ? 700 : 500,
    color: active ? '#F2921D' : '#333333',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'color 0.2s',
    '&:hover': { color: '#F2921D' },
  });

  const scrollToSection = (sectionId) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPage = (path) => {
    setMobileOpen(false);
    navigate(path);
  };

  const goHome = () => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const mobileItemSx = (active = false) => ({
    py: 1.5,
    px: 2,
    textAlign: 'left',
    width: '100%',
    border: 'none',
    cursor: 'pointer',
    bgcolor: active ? '#fff8f0' : 'transparent',
    borderLeft: active ? '3px solid #F2921D' : '3px solid transparent',
    '&:hover': { bgcolor: '#f0f0f0' },
  });

  /* ─────────────────────────────────────────────────────────────────────
   * MOBILE MENU (COLLAPSE)
   * ───────────────────────────────────────────────────────────────────── */
  const mobileMenuContent = (
    <Box sx={{ width: '100%', bgcolor: 'white', borderTop: 'none', pb: 3, pt: 2, px: { xs: 1.5, sm: 2, md: 2 } }}>
      <List sx={{ p: 0 }} role="navigation" aria-label="Main navigation">
        {[
          { text: 'Home', isHome: true },
          { text: 'About us', id: 'about_us_section' },
          { text: 'How it works', id: 'silent_features_section' },
          { text: 'FAQ', id: 'faq_section' },
          { text: 'Downloads', path: '/downloads' },
          { text: 'Fee Structure', path: '/fee_structure' },
        ].map((item) => (
          <ListItem
            key={item.text}
            component="button"
            onClick={
              item.isHome ? goHome :
                item.path ? () => goToPage(item.path) :
                  () => scrollToSection(item.id)
            }
            sx={{
              py: 1.25,
              px: 0,
              textAlign: 'left',
              width: '100%',
              border: 'none',
              bgcolor: 'transparent',
              '&:hover': { bgcolor: '#f5f5f5' }
            }}
          >
            <Typography sx={{ fontSize: '13px', fontWeight: 600, color: item.isHome ? '#F2921D' : '#333' }}>
              {item.text}
            </Typography>
          </ListItem>
        ))}
      </List>

      <Box sx={{ pt: 1, pb: 2, display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
        {[
          { label: 'e-License', href: 'https://dlims.punjab.gov.pk/elicense' },
          { label: 'Track Application', href: 'https://dlims.punjab.gov.pk/track' },
          { label: 'Verify License', href: 'https://dlims.punjab.gov.pk/verify' },
        ].map(({ label, href }) => (
          <Box
            key={label}
            component="a"
            href={href}
            sx={{ display: 'inline-block', textDecoration: 'none', bgcolor: '#f1f1f1', color: '#1a1a1a', fontWeight: 600, fontSize: '11px', borderRadius: '50px', px: 2, py: 0.75, transition: 'background 0.2s ease', '&:hover': { bgcolor: '#e4e4e4' } }}
          >
            {label}
          </Box>
        ))}
        <Box
          component="a"
          href="https://dlims.punjab.gov.pk/login"
          sx={{ display: 'inline-block', textDecoration: 'none', bgcolor: '#1DAC52', color: 'white', fontWeight: 600, fontSize: '11px', borderRadius: '50px', px: 3, py: 0.75, transition: 'background 0.2s ease', '&:hover': { bgcolor: '#158f42' } }}
        >
          Login
        </Box>
      </Box>
    </Box>
  );

  /* ─────────────────────────────────────────────────────────────────────
   * RENDER
   * ───────────────────────────────────────────────────────────────────── */
  return (
    <Box sx={{ flexGrow: 1 }}>

      <Box
        component="header"
        sx={{
          position: isHeaderFixed ? 'fixed' : 'relative',
          top: isHeaderFixed ? 0 : 'auto',
          left: 0,
          right: 0,
          zIndex: 1199,
          width: '100%',
          boxSizing: 'border-box',
          bgcolor: 'white',
          boxShadow: 'none',
          py: { xs: 0.75, md: 0.75 },
          px: { xs: 1.5, sm: 2, md: 2, lg: 3, xl: 5 },
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 1, md: 1, lg: 1.5, xl: 2 },
            minHeight: { xs: '50px', md: '52px', lg: '56px' },
            width: '100%',
            flexWrap: 'nowrap',
          }}
        >

          {/* ── LEFT: Logos ──────────────────────────────────────────── */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              // FIX: tighter gap at md so logos take less space
              gap: { xs: 0.75, sm: 1, md: 0.75, lg: 1.25, xl: 1.5 },
              // FIX: allow logos to shrink slightly at md
              flexShrink: { xs: 0, md: 1, lg: 0 },
              minWidth: 0,
            }}
          >

            {/* DLIMS logo → goes home */}
            <Box
              onClick={goHome}
              role="button"
              tabIndex={0}
              aria-label="Go to home page"
              onKeyDown={(e) => e.key === 'Enter' && goHome()}
              sx={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', flexShrink: 0 }}
            >
              <img
                src="https://dlims.punjab.gov.pk/theme_new/assets/images/image%202.svg"
                alt="DLIMS – Driving License Information Management System"
                fetchPriority="high"
                loading="eager"
                style={{
                  // FIX: smaller at md breakpoint to save horizontal space
                  height: 'clamp(24px, 3.2vw, 38px)',
                  width: 'auto',
                  display: 'block',
                }}
              />
            </Box>

            {/* Vertical divider */}
            <Box
              sx={{
                width: '1px',
                height: '28px',
                bgcolor: '#ddd',
                display: { xs: 'none', sm: 'block' },
                flexShrink: 0,
              }}
            />

            {/* Dastak logo → opens info dropdown only */}
            <Box
              onClick={() => setDropdownOpen((p) => !p)}
              role="button"
              tabIndex={0}
              aria-label="Dastak information"
              aria-expanded={dropdownOpen}
              onKeyDown={(e) => e.key === 'Enter' && setDropdownOpen((p) => !p)}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer',
                position: 'relative',
                // FIX: allow Dastak logo to shrink at md
                flexShrink: { md: 1, lg: 0 },
                minWidth: 0,
              }}
            >
              <Box
                component="img"
                src="https://dlims.punjab.gov.pk/theme/assets/media/images/dastak-logo-new-nav.svg"
                alt="Dastak – Doorstep Delivery of Services"
                fetchPriority="high"
                loading="eager"
                sx={{
                  width: { xs: '140px', sm: '170px', md: '200px', lg: '240px', xl: '250px' },
                  height: 'auto',
                  display: 'block',
                }}
              />

              {dropdownOpen && (
                <Box
                  role="dialog"
                  aria-label="Dastak Self Service Mode info"
                  sx={{
                    position: 'absolute',
                    top: 'calc(100% + 12px)',
                    left: 0,
                    bgcolor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    p: 2.5,
                    minWidth: { xs: '280px', sm: '340px' },
                    zIndex: 1300,
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <svg width="32" height="47" viewBox="0 0 32 47" fill="none" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M1.32837 18.354C1.37948 18.662 1.16837 18.9523 0.859487 19.001C0.5506 19.052 0.261704 18.8437 0.210618 18.5357C-0.864914 11.9784 2.24614 5.4528 8.00148 2.13982C14.8838 -1.82236 23.619 -0.144826 28.5325 6.03552L28.4703 5.51034C28.4347 5.2001 28.6569 4.91865 28.9703 4.8832C29.2814 4.84553 29.5636 5.06934 29.5992 5.3818L29.9281 8.19386V8.19607C29.9814 8.65257 29.4836 8.98495 29.0769 8.74564L26.6325 7.3008C26.3614 7.14347 26.2725 6.79556 26.4303 6.52741C26.5903 6.25928 26.9369 6.16843 27.2081 6.33019L27.4036 6.44542C22.7859 0.927608 14.8302 -0.488578 8.56845 3.11701C3.21963 6.19723 0.32646 12.2623 1.32656 18.3539L1.32837 18.354ZM25.139 27.6456C25.1523 27.67 25.1657 27.6944 25.1768 27.7188C25.7101 27.5503 26.2879 27.5415 26.8256 27.7032C30.7856 24.0801 32.6612 18.6845 31.7901 13.3769C31.7389 13.0666 31.4501 12.8583 31.1412 12.9093C30.8323 12.9603 30.6234 13.2484 30.6723 13.5564C31.5545 18.908 29.4146 24.3281 25.139 27.6479L25.139 27.6456ZM4.59263 25.4629L4.79041 25.5803C5.06151 25.7376 5.40816 25.649 5.56818 25.3787C5.72596 25.1105 5.63707 24.7626 5.36596 24.6053L2.92153 23.1604C2.51708 22.9211 2.01711 23.2513 2.07042 23.7122L2.3993 26.5265C2.43708 26.8367 2.71707 27.0583 3.0282 27.0251C3.33931 26.9874 3.56376 26.7104 3.5282 26.3979L3.46598 25.8705C5.14373 27.9824 7.32597 29.6399 9.84601 30.6837V29.4494C7.80383 28.5253 6.01492 27.1625 4.59049 25.4606L4.59263 25.4629ZM13.1924 23.4286V21.8265C12.5414 21.5184 11.928 21.093 11.3858 20.5523C8.83912 18.0127 8.83912 13.8934 11.3858 11.3537C13.9347 8.81191 18.0633 8.81191 20.6125 11.3537C23.1592 13.8932 23.1592 18.0125 20.6125 20.5523C20.0703 21.093 19.4592 21.5184 18.8058 21.8265V25.6047C18.977 25.5715 19.157 25.5538 19.3392 25.5538C19.4658 25.5538 19.5881 25.5626 19.7103 25.5781C20.2814 25.361 20.837 25.0884 21.3681 24.7649L22.2192 25.6136C22.5525 25.946 23.097 25.946 23.4325 25.6136L25.6836 23.3666C26.0169 23.0342 26.0169 22.4913 25.6836 22.1567L24.8369 21.3124C25.3947 20.3972 25.7969 19.4133 26.0435 18.3984H27.2458C27.7169 18.3984 28.1013 18.015 28.1013 17.5453V14.3697C28.1013 13.8999 27.7169 13.5144 27.2458 13.5144H26.0458C25.7991 12.5016 25.3947 11.5156 24.8347 10.6004L25.6813 9.75606C26.0147 9.42367 26.0147 8.88073 25.6813 8.54615L23.4303 6.30138C23.0947 5.96677 22.5503 5.96677 22.217 6.30138L21.3658 7.14568C20.4481 6.58946 19.4636 6.18616 18.4459 5.93797V4.74133C18.4459 4.27154 18.0592 3.88596 17.5881 3.88596H14.4037C13.9326 3.88596 13.5459 4.27155 13.5459 4.74133V5.93797C12.5303 6.18394 11.5437 6.58502 10.6237 7.14568L9.77928 6.30138C9.44372 5.96677 8.89927 5.96677 8.56596 6.30138L6.31267 8.54615C5.97934 8.88076 5.97934 9.42369 6.31267 9.75606L7.15934 10.6004C6.60157 11.5156 6.19935 12.4995 5.95268 13.5144H4.75046C4.27935 13.5144 3.89491 13.8999 3.89491 14.3697V17.5453C3.89491 18.015 4.27935 18.3984 4.75046 18.3984H5.95268C6.19934 19.4111 6.60155 20.3972 7.15934 21.3124L6.31267 22.1567C5.97934 22.4913 5.97934 23.0342 6.31267 23.3666L8.56596 25.6136C8.89929 25.946 9.44375 25.946 9.77928 25.6136L9.84594 25.5449V23.3799H12.6548C12.837 23.3799 13.017 23.3976 13.1881 23.4309L13.1924 23.4286ZM19.808 19.7523C21.9146 17.6538 21.9146 14.2522 19.808 12.1534C17.7036 10.0549 14.2947 10.0549 12.1901 12.1534C10.0834 14.2519 10.0834 17.6535 12.1901 19.7523C12.499 20.0603 12.8345 20.3218 13.1901 20.5412V16.3995C13.1901 14.8571 14.4523 13.6007 15.9989 13.6007C17.5478 13.6007 18.8056 14.8594 18.8056 16.3995V20.5412C19.1633 20.3218 19.4989 20.0603 19.8055 19.7523H19.808ZM26.0282 28.7183C25.1104 28.7183 24.3571 29.4673 24.3571 30.3847V29.0042C24.3571 28.0868 23.606 27.3378 22.686 27.3378C21.766 27.3378 21.0149 28.0868 21.0149 29.0042V28.3505C21.0149 27.4353 20.2638 26.6841 19.3438 26.6841C18.4238 26.6841 17.6749 27.4353 17.6749 28.3505V16.3999C17.6749 15.4847 16.9216 14.7335 16.0038 14.7335C15.086 14.7335 14.3327 15.4847 14.3327 16.3999V29.8952C14.3327 30.2077 14.0749 30.4625 13.7638 30.4625C13.4527 30.4625 13.1949 30.2077 13.1949 29.8952V25.5497C13.1949 24.9779 12.7283 24.5126 12.155 24.5126H10.9905V36.8359C10.9905 38.6308 12.8438 39.2978 13.6061 41.5315C13.635 41.5293 13.6661 41.5293 13.695 41.5293H24.7683C24.8727 41.5293 24.9772 41.5381 25.0816 41.5514C25.8349 39.3044 27.7038 38.6374 27.7038 36.838V30.3874C27.7038 29.47 26.9527 28.721 26.0327 28.721L26.0282 28.7183ZM24.7637 42.6589H13.6904C13.046 42.6589 12.5171 43.1863 12.5171 43.8312V45.83C12.5171 46.4726 13.0459 47 13.6904 47H24.7637C25.4081 47 25.937 46.4726 25.937 45.83V43.8312C25.937 43.1863 25.4081 42.6589 24.7637 42.6589Z"
                        fill="#1DAC52" />
                    </svg>
                    <img
                      src="https://dlims.punjab.gov.pk/theme/assets/media/images/dastak-logo-dark.svg"
                      alt="Dastak"
                      style={{ width: '100px' }}
                    />
                  </Box>
                  <Box sx={{ py: 2 }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 700, mb: 1 }}>
                      Dastak Self Service Mode
                    </Typography>
                    <Typography sx={{ fontSize: '13px', color: '#666', lineHeight: 1.6 }}>
                      Take control of your experience with Dastak's Self Service Mode, allowing you to
                      effortlessly manage your orders and services at your convenience, anytime and anywhere!
                    </Typography>
                  </Box>
                  <Box sx={{ pb: 1 }}>
                    <Button
                      onClick={(e) => { e.stopPropagation(); setDropdownOpen(false); }}
                      sx={{ borderRadius: '8px', px: 3, textTransform: 'none', bgcolor: '#1DAC52', color: 'white', fontWeight: 600, fontSize: '14px', boxShadow: 'none', '&:hover': { bgcolor: '#158f42', boxShadow: 'none' } }}
                    >
                      Got it
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>

          {/* ── RIGHT: Desktop navigation ─────────────────────────────── */}
          <Box
            component="nav"
            aria-label="Main navigation"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              // Tighter gap at md to prevent overlap
              gap: { md: 0.5, lg: 1.25, xl: 2 },
              ml: 'auto',
              flexShrink: 1,
              flexWrap: 'nowrap',
              justifyContent: 'flex-end',
              minWidth: 0,
            }}
          >
            <Box component="span" onClick={goHome} role="button" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && goHome()}
              aria-current={isHome ? 'page' : undefined}
              sx={baseNavSx(isHome)}>
              Home
            </Box>

            <Box component="span" onClick={() => scrollToSection('about_us_section')} role="button" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollToSection('about_us_section')}
              sx={baseNavSx(false)}>
              About us
            </Box>

            <Box component="span" onClick={() => scrollToSection('silent_features_section')} role="button" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollToSection('silent_features_section')}
              sx={baseNavSx(false)}>
              How it works
            </Box>

            <Box component="span" onClick={() => scrollToSection('faq_section')} role="button" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollToSection('faq_section')}
              sx={baseNavSx(false)}>
              FAQ
            </Box>

            <Box component="span" onClick={() => goToPage('/downloads')} role="button" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && goToPage('/downloads')}
              aria-current={isDownloads ? 'page' : undefined}
              sx={baseNavSx(isDownloads)}>
              Downloads
            </Box>

            <Box component="span" onClick={() => goToPage('/fee_structure')} role="button" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && goToPage('/fee_structure')}
              aria-current={isFee ? 'page' : undefined}
              sx={baseNavSx(isFee)}>
              Fee Structure
            </Box>

            {/* Action pill buttons */}
            {[
              { label: 'e-License', href: 'https://dlims.punjab.gov.pk/elicense' },
              { label: 'Track Application', href: 'https://dlims.punjab.gov.pk/track' },
              { label: 'Verify License', href: 'https://dlims.punjab.gov.pk/verify' },
            ].map(({ label, href }) => (
              <Box
                key={label}
                component="a"
                href={href}
                sx={{
                  fontSize: { md: '10px', lg: '12px', xl: '13px' },
                  fontWeight: 600,
                  color: '#4d4d4dff',
                  px: { md: 1, lg: 0.8, xl: 0.8 },
                  py: { md: 0.5, lg: 0.6, xl: 0.8 },
                  bgcolor: '#f1f1f1',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s ease',
                  '&:hover': { bgcolor: '#dadadaff' },
                }}
              >
                {label}
              </Box>
            ))}

            {/* Login */}
            <Box
              component="a"
              href="https://dlims.punjab.gov.pk/login"
              sx={{
                borderRadius: '50px',
                fontSize: { md: '10px', lg: '12px', xl: '13px' },
                fontWeight: 600,
                bgcolor: '#127938ff',
                color: 'white',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: { md: 1, lg: 1.5, xl: 2 },
                py: { md: 0.5, lg: 0.8, xl: 1 },
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'background 0.2s ease',
                '&:hover': { bgcolor: '#127938ff' },
              }}
            >
              Login
            </Box>

          </Box>

          {/* ── Hamburger (mobile only) ────────────────────────────────── */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto', color: '#888', flexShrink: 0, border: '1px solid #dee2e6', borderRadius: '4px', p: '2px 4px', my: 'auto', '&:hover': { bgcolor: 'transparent' } }}
          >
            <MenuIcon />
          </IconButton>

        </Box>
      </Box>

      {/* Mobile Sliding Left Menu */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'fixed',
          top: 0,
          left: 0,
          width: { xs: '250px', sm: '300px' },
          height: '100vh',
          bgcolor: 'white',
          boxShadow: '4px 0px 10px rgba(0,0,0,0.1)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 1300,
          pb: 1,
          // Ensure no horizontal issues when wrapped
          overflowY: 'auto'
        }}
      >
        {mobileMenuContent}
      </Box>

      {isHeaderFixed && (
        <Box sx={{ display: { xs: 'none', md: 'block' }, height: { md: '56px' } }} />
      )}

    </Box>
  );
};

export default Header;