import { Box, Typography, Container } from '@mui/material';
import useScrollDirection from '../../hooks/useScrollDirection';
import topBarAnimation from '../../assets/top-bar-animation.png';

const TopBar = () => {
    const { scrollDirection, scrollY } = useScrollDirection();
    const isVisible = scrollDirection === 'up' || scrollY < 100;

    return (
        <Box
            className="dastak-topbar"
            sx={{
                background: 'linear-gradient(134deg, #fed230 -50%, #027439 100%)',
                height: { xs: 'auto', md: '55px' },
                overflow: 'hidden',
                py: { xs: 0.5, sm: 0.75, md: 0 },
                px: { xs: 0.75, sm: 1.5, md: 3 },
                position: 'relative',
                zIndex: 1200,
                transition: 'all 0.3s ease-in-out',
                transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? 'visible' : 'hidden'
            }}
        >
            <Container maxWidth="xl" disableGutters>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr 2fr', md: '1fr 2fr' },
                        gap: { xs: 0.5, sm: 1, md: 2 },
                        alignItems: 'center',
                        width: '100%',
                        minHeight: { xs: 'auto', md: '55px' },
                    }}
                >
                    {/* Left Column - mobile: "All DLIMS..." text; desktop: animation image */}
                    <Box
                        className="dastak-topbar-left"
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            minHeight: { xs: 'auto', md: '55px' },
                        }}
                    >
                        {/* Animation image — desktop only */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                            <img
                                src={topBarAnimation}
                                alt=""
                                aria-hidden="true"
                                style={{
                                    width: 'auto',
                                    height: 'clamp(30px, 6vw, 55px)',
                                    objectFit: 'contain',
                                    display: 'block',
                                    animation: 'floating 3s ease-in-out infinite'
                                }}
                            />
                        </Box>

                        {/* "All DLIMS services are Powered by" text — mobile/tablet only */}
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <Typography
                                component="p"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '9px', sm: '11px' },
                                    color: 'white',
                                    m: 0,
                                    lineHeight: 1.35,
                                }}
                            >
                                All DLIMS services are Powered by
                            </Typography>
                        </Box>
                    </Box>

                    {/* Right Column - Dastak logo + ONE WINDOW text */}
                    <Box
                        className="dastak-topbar-right top-bar-animation"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: { xs: 'flex-start', md: 'flex-end' },
                            gap: { xs: 0.5, sm: 0.75, md: 1.5 },
                            minHeight: { xs: 'auto', md: '55px' },
                            width: '100%',
                        }}
                    >
                        {/* "All DLIMS services are Powered by" — desktop only */}
                        <Typography
                            component="p"
                            sx={{
                                display: { xs: 'none', md: 'block' },
                                fontWeight: 600,
                                fontSize: { md: '13px' },
                                color: 'white',
                                m: 0,
                                whiteSpace: 'nowrap',
                            }}
                        >
                            All DLIMS services are Powered by
                        </Typography>

                        <img
                            src="https://dlims.punjab.gov.pk/theme_new/assets/images/dastak-logo-new-top.svg"
                            alt="Dastak Logo"
                            style={{
                                width: 'clamp(60px, 15vw, 120px)',
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
                                whiteSpace: { xs: 'normal', md: 'nowrap' },
                                letterSpacing: '0.5px',
                                lineHeight: 1.3,
                            }}
                        >
                            ONE WINDOW FOR ALL SERVICES
                        </Typography>
                    </Box>
                </Box>
            </Container>

            {/* CSS Keyframes for Floating Animation */}
            <style>{`
                @keyframes floating {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-8px);
                    }
                }
            `}</style>
        </Box>
    );
};

export default TopBar;