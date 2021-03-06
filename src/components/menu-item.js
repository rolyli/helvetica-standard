import React from 'react'
import { css, cx } from '@emotion/css'


const MenuItem = ({item1, item2, price, className, vegan}) => {
    return (
    <div class={`${className}`}>
        <div class="font-montserrat text-white text-left text-lg mb-2 uppercase">
            <span class="float-left">{item1} {vegan && '(v)'}</span>
            <span class='float-right'>£{price}</span>
        </div>
        <div class="font-montserrat text-white text-left text-lg mb-6">
            <br/>
            {item2}
        </div>
    </div>
)}

const MenuEl = ({ className, item1, price }) => {
    return (
        <div class="font-montserrat text-white text-left text-lg mb-2 xl:mr-20 uppercase">
            <span class="float-left">{item1}</span>
            <span class='float-right'>£{price}</span>
            <br/>

        </div>

        
    )
}

const MenuTitle = ({title, className, children}) => {
    return (
        <div className={cx(`${className} font-serif text-white text-center text-5xl mb-12 `, css`
            :before,
            :after {
                display: inline-block;
                content: "";
                border-top: .1rem solid white;
                width: 100%;
                transform: translateY(-1rem);
            }
        `)}
        >
            {title}{children}
        </div>
    )
}

const MenuSubtitle = ({subtitle, className}) => {
    return (
        <div class={`${className} font-serif text-white text-3xl mb-4`}>
            {subtitle}
        </div>
    )
}



export {
    MenuItem,
    MenuTitle,
    MenuSubtitle,
    MenuEl
}