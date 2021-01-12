import FeatherIcon from 'feather-icons-react';

export const ICONS = {
    "home": "home",
    "account": "account",
    "invest": "invest",
    "settings": "settings",
    "go_back": "go_back",
}

const SVGICONS = {
    "home": "home",
    "account": "credit-card",
    "invest": "cloud",
    "settings": "settings",
}

const iconPreloader = (
    <div className="lds-ripple">
        <div></div>
        <div></div>
    </div>
);
export function MIcon(props) {
    return (
        <span class="material-icons-outlined">
            home
        </span>
    );
}

export function SVGIcon(props) {
    let icon = SVGICONS[props.icon];
    return <FeatherIcon icon={icon} />
}
