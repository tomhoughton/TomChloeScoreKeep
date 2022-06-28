import { Row, Text, Col, Spacer } from '@nextui-org/react';

export default function Title() {
    <div className='MainTitle'>
        <Text
            h1
            size={60}
            css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
            
            }}
            weight="bold"
        >
            Game
        </Text>
        <Text
            h1
            size={60}
            css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
            
            }}
            weight="bold"
        >
            Scores
        </Text>
    </div>
}