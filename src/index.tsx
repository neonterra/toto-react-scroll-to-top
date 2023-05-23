import * as React from 'react'
import './styles.scss'

const {  } = React

export type ICounterProps = {
  className?: string,
  position?: string
}

const App: React.FC<ICounterProps> = ({ className = '' , position = 'right'}) => {
  
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        window.scroll({top: 0, behavior: "smooth"})
    };

    return (
        <div className={`toto-top-button  x ${position} ${className}`} onClick={handleClick}  >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
            </svg>
        </div>
    )
}

export default App