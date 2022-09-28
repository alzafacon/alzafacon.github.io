import React, { useState } from 'react'
import CodeBlock from '@theme/CodeBlock';

export const ClickToReveal = ({language, text}) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div onClick={() => setIsVisible(true)}>
            <CodeBlock
                language={language}
            >
                {isVisible
                    ? text
                    : 'Click to reveal'
                }
            </CodeBlock>
        </div>
    )
}