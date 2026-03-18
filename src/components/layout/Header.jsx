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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileActionsOpen, setMobileActionsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { scrollY } = useScrollDirection();
  const navigate = useNavigate();
  const location = useLocation();

  const isHeaderFixed = scrollY > 100;

  const isHome = location.pathname === '/';
  const isDownloads = location.pathname === '/downloads';
  const isFee = location.pathname === '/fee_structure';

  const baseNavSx = (active) => ({
    fontSize: { md: '11px', lg: '12px', xl: '13px' },
    fontWeight: active ? 700 : 600,
    color: active ? '#F2921D' : '#1a1a1a',
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
   * MOBILE DRAWER
   * ───────────────────────────────────────────────────────────────────── */
  const drawer = (
    <Box sx={{ width: '100%', bgcolor: '#fcfbf5' }}>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid #eee' }}>
        <Typography component="h2" sx={{ fontWeight: 700, color: '#1a1a1a', fontSize: '1rem' }}>
          Menu
        </Typography>
        <IconButton onClick={handleDrawerToggle} size="small" aria-label="Close menu">
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ p: 0 }} role="navigation" aria-label="Main navigation">

        <ListItem component="button" onClick={goHome} sx={mobileItemSx(isHome)}>
          <ListItemText
            primary="Home"
            primaryTypographyProps={{ sx: { fontWeight: 600, color: isHome ? '#F2921D' : '#1a1a1a' } }}
          />
        </ListItem>

        <ListItem component="button" onClick={() => scrollToSection('about_us_section')} sx={mobileItemSx(false)}>
          <ListItemText primary="About Us" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
        </ListItem>

        <ListItem component="button" onClick={() => scrollToSection('silent_features_section')} sx={mobileItemSx(false)}>
          <ListItemText primary="How It Works" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
        </ListItem>

        <ListItem component="button" onClick={() => scrollToSection('faq_section')} sx={mobileItemSx(false)}>
          <ListItemText primary="FAQ" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
        </ListItem>

        <Divider sx={{ my: 1 }} />

        {/* Services accordion */}
        <ListItem
          component="button"
          onClick={() => setMobileServicesOpen((p) => !p)}
          sx={mobileItemSx(isDownloads || isFee)}
          aria-expanded={mobileServicesOpen}
        >
          <ListItemText
            primary="Services"
            primaryTypographyProps={{ sx: { fontWeight: 600, color: (isDownloads || isFee) ? '#F2921D' : '#1a1a1a' } }}
          />
          <ExpandMoreIcon sx={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
        </ListItem>
        <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              component="button"
              onClick={() => goToPage('/downloads')}
              sx={{
                py: 1, px: 4, textAlign: 'left', width: '100%', border: 'none', cursor: 'pointer',
                bgcolor: isDownloads ? '#fff8f0' : 'transparent',
                borderLeft: isDownloads ? '3px solid #F2921D' : '3px solid transparent',
                '&:hover': { bgcolor: '#f0f0f0' },
              }}
            >
              <ListItemText
                primary="Downloads"
                primaryTypographyProps={{ sx: { fontSize: '0.9rem', color: isDownloads ? '#F2921D' : '#1a1a1a', fontWeight: isDownloads ? 700 : 400 } }}
              />
            </ListItem>
            <ListItem
              component="button"
              onClick={() => goToPage('/fee_structure')}
              sx={{
                py: 1, px: 4, textAlign: 'left', width: '100%', border: 'none', cursor: 'pointer',
                bgcolor: isFee ? '#fff8f0' : 'transparent',
                borderLeft: isFee ? '3px solid #F2921D' : '3px solid transparent',
                '&:hover': { bgcolor: '#f0f0f0' },
              }}
            >
              <ListItemText
                primary="Fee Structure"
                primaryTypographyProps={{ sx: { fontSize: '0.9rem', color: isFee ? '#F2921D' : '#1a1a1a', fontWeight: isFee ? 700 : 400 } }}
              />
            </ListItem>
          </List>
        </Collapse>

        <Divider sx={{ my: 1 }} />

        {/* Quick Links accordion */}
        <ListItem
          component="button"
          onClick={() => setMobileActionsOpen((p) => !p)}
          sx={mobileItemSx(false)}
          aria-expanded={mobileActionsOpen}
        >
          <ListItemText primary="Quick Links" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
          <ExpandMoreIcon sx={{ transform: mobileActionsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
        </ListItem>
        <Collapse in={mobileActionsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {[
              { label: 'e-License', href: 'https://dlims.punjab.gov.pk/elicense' },
              { label: 'Track Application', href: 'https://dlims.punjab.gov.pk/track' },
              { label: 'Verify License', href: 'https://dlims.punjab.gov.pk/verify' },
            ].map(({ label, href }) => (
              <ListItem
                key={label}
                component="a"
                href={href}
                sx={{ py: 1, px: 4, '&:hover': { bgcolor: '#f0f0f0' }, textDecoration: 'none', color: 'inherit' }}
              >
                <ListItemText primary={label} primaryTypographyProps={{ sx: { fontSize: '0.9rem' } }} />
              </ListItem>
            ))}
          </List>
        </Collapse>

        <Divider sx={{ my: 1 }} />

        {/* Login */}
        <ListItem sx={{ py: 2, px: 2 }}>
          <Button
            component="a"
            href="https://dlims.punjab.gov.pk/login"
            variant="contained"
            fullWidth
            sx={{ bgcolor: '#1DAC52', color: 'white', fontWeight: 700, textTransform: 'none', py: 1.5, borderRadius: '6px', boxShadow: 'none', '&:hover': { bgcolor: '#158f42', boxShadow: 'none' } }}
          >
            Login
          </Button>
        </ListItem>

      </List>
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
          position: isHeaderFixed ? 'fixed' : 'static',
          top: isHeaderFixed ? 0 : 'auto',
          left: 0,
          right: 0,
          zIndex: 1199,
          width: '100%',
          boxSizing: 'border-box',
          bgcolor: 'white',
          boxShadow: isHeaderFixed
            ? '0 2px 8px rgba(0,0,0,0.12)'
            : '0 1px 3px rgba(0,0,0,0.08)',
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
              <img
                src="https://dlims.punjab.gov.pk/theme/assets/media/images/dastak-logo-new-nav.svg"
                alt="Dastak – Doorstep Delivery of Services"
                style={{
                  // FIX: constrained width at md so it doesn't eat nav space
                  width: 'clamp(70px, 10vw, 200px)',
                  maxWidth: '160px',
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
                        d="M1.32837 18.354C1.37948 18.662 1.16837 18.9523 0.859487 19.001C0.5506 19.052 0.261704 18.8437 0.210618 18.5357C-0.864914 11.9784 2.24614 5.4528 8.00148 2.13982C14.8838 -1.82236 23.619 -0.144826 28.5325 6.03552L28.4703 5.51034C28.4347 5.2001 28.6569 4.91865 28.9703 4.8832C29.2814 4.84553 29.5636 5.06934 29.5992 5.3818L29.9281 8.19386V8.19607C29.9814 8.65257 29.4836 8.98495 29.0769 8.74564L26.6325 7.3008C26.3614 7.14347 26.2725 6.79556 26.4303 6.52741C26.5903 6.25928 26.9369 6.16843 27.2081 6.33019L27.4036 6.44542C22.7859 0.927608 14.8302 -0.488578 8.56845 3.11701C3.21963 6.19723 0.32646 12.2623 1.32656 18.3539L1.32837 18.354Z"
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
              // FIX: tighter gap at md, grows at lg/xl
              gap: { md: 0.75, lg: 1.25, xl: 2 },
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
                  // FIX: smaller font & tighter padding at md
                  fontSize: { md: '10px', lg: '11px', xl: '12px' },
                  fontWeight: 600,
                  color: '#1a1a1a',
                  px: { md: 0.75, lg: 1, xl: 1.2 },
                  py: 0.5,
                  bgcolor: '#f2f2f2',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s',
                  '&:hover': { bgcolor: '#e8e8e8' },
                }}
              >
                {label}
              </Box>
            ))}

            {/* Login */}
            <Button
              component="a"
              href="https://dlims.punjab.gov.pk/login"
              variant="contained"
              size="small"
              sx={{
                borderRadius: '6px',
                // FIX: tighter font & padding at md
                fontSize: { md: '10px', lg: '11px', xl: '12px' },
                fontWeight: 600,
                bgcolor: '#1DAC52',
                color: 'white',
                textTransform: 'none',
                px: { md: 1, lg: 1.25, xl: 1.5 },
                py: 0.5,
                whiteSpace: 'nowrap',
                flexShrink: 0,
                boxShadow: 'none',
                '&:hover': { bgcolor: '#158f42', boxShadow: 'none' },
              }}
            >
              Login
            </Button>

          </Box>

          {/* ── Hamburger (mobile only) ────────────────────────────────── */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto', color: '#1a1a1a', flexShrink: 0 }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

        </Box>
      </Box>

      {isHeaderFixed && (
        <Box sx={{ display: { xs: 'none', md: 'block' }, height: { md: '52px', lg: '56px' } }} />
      )}

      {/* ══════════════════ MOBILE DRAWER ══════════════════ */}
      <Box component="nav" aria-label="Mobile navigation">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', maxWidth: '320px' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
};

export default Header;