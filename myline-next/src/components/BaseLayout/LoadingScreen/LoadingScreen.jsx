import { LoadingScreenContainer, LoadingScreenLogo, LoadingScreenLogoWrapper, LoadingScreenMotto, LoadingScreenWrapper } from "./styles"

const LoadingScreen = () => {
    return (
        <LoadingScreenWrapper>
            
                <LoadingScreenContainer>
                    <LoadingScreenLogoWrapper>
                        <LoadingScreenLogo src="/myline-logo-dark.png"/>
                    </LoadingScreenLogoWrapper>
                    <LoadingScreenMotto>
                        СЛОГАН в три строчки
                    </LoadingScreenMotto>
                </LoadingScreenContainer>
                
            
            
        </LoadingScreenWrapper>
    )
}

export default LoadingScreen