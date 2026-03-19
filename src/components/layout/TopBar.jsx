import { Box, Typography, Container } from '@mui/material';
import useScrollDirection from '../../hooks/useScrollDirection';
import topBarAnimation from '../../assets/top-bar-animation.png';
import dastakLogoTop from '../../assets/images/dastak-logo-top.svg';

const TopBar = () => {
    const { scrollDirection, scrollY } = useScrollDirection();
    const isVisible = scrollDirection === 'up' || scrollY < 100;

    return (
        <Box
            className="dastak-topbar"
            sx={{
                background: 'linear-gradient(134deg, #fed230 -50%, #027439 100%)', // Restored original exact color
                minHeight: { xs: 'auto', md: '55px' },
                overflow: 'hidden',
                py: { xs: 1, sm: 1.5, md: 0 },
                px: { xs: 1.5, sm: 2, md: 2, lg: 3, xl: 5 },
                position: 'relative',
                zIndex: 1200,
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.3s ease-in-out',
                transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? 'visible' : 'hidden'
            }}
        >
            {/* Background animation very large on mobile & desktop */}
            <Box
                component="img"
                src={topBarAnimation}
                alt=""
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    top: '0%', 
                    left: { xs: '-40%', md: '0%' },
                    width: { xs: '150%', sm: '100%', md: '40%' }, // smaller on desktop (40%), stays on left side
                    height: 'auto',
                    opacity: { xs: 0.3, md: 0.8 }, 
                    zIndex: 0,
                    animation: isVisible ? 'bg-floating-curve 5s ease-in-out infinite alternate' : 'none',
                    '@media (prefers-reduced-motion: reduce)': {
                        animation: 'none'
                    }
                }}
            />

            {/* Main content grid */}
            <Box sx={{ width: '100%', position: 'relative', zIndex: 1, display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                <Box
                    className="dastak-topbar-right top-bar-animation"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        alignItems: 'center',
                        justifyContent: { xs: 'space-between', md: 'flex-end' },
                        gap: { xs: 0, sm: 1.5, md: 2 },
                        width: { xs: '100%', md: 'auto' },
                    }}
                >
                    <Typography
                        component="p"
                        sx={{
                            fontSize: { xs: '10px', sm: '11px', md: '13px' },
                            fontWeight: 500,
                            color: 'white',
                            m: 0,
                            whiteSpace: 'normal',
                            textAlign: 'left',
                            flex: 'none',
                            // strictly force drop lines on xs
                            maxWidth: { xs: '70px', sm: 'auto', md: 'none' },
                            lineHeight: 1.2,
                        }}
                    >
                        All DLIMS services are Powered by
                    </Typography>

                    <img
                        src={dastakLogoTop}
                        alt="Dastak Logo"
                        style={{
                            width: 'clamp(85px, 28vw, 120px)',
                            height: 'auto',
                            display: 'block',
                            flexShrink: 0,
                        }}
                    />

                    <Typography
                        component="h6"
                        sx={{
                            fontSize: { xs: '9px', sm: '11px', md: '14px' },
                            fontWeight: 700,
                            color: 'white',
                            m: 0,
                            whiteSpace: 'normal',
                            textAlign: 'left',
                            letterSpacing: '0.5px',
                            lineHeight: 1.2,
                            flex: 'none',
                            // strictly force drop lines on xs
                            maxWidth: { xs: '65px', sm: 'auto', md: 'none' },
                        }}
                    >
                        ONE WINDOW FOR ALL SERVICES
                    </Typography>
                </Box>
            </Box>

            {/* CSS Keyframes for Floating Animation */}
            <style>{`
                @keyframes bg-floating-curve {
                    0% {
                        transform: translate(5%, -40%) rotate(-3deg);
                    }
                    50% {
                        transform: translate(-5%, -10%) rotate(-8deg);
                    }
                    100% {
                        transform: translate(-15%, 20%) rotate(-12deg);
                    }
                }
            `}</style>
        </Box>
    );
};

export default TopBar;