import { Button, Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { movePizzaToNextStage, markPizzaAsPicked } from '../../Redux/Actions/Action';

const PizzaCard = (props) => {
    const { pizza } = props
    const dispatch = useDispatch();
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
    let redAlert = false

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTotalSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else if (!isActive && totalSeconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, totalSeconds]);
    if (pizza.size === 'small' && totalSeconds > 180 ||
        pizza.size === 'medium' && totalSeconds > 240 ||
        pizza.size === 'large' && totalSeconds > 300) {
        redAlert = true
    }

    const handleMoveToNextStage = (pizzaId) => {
        dispatch(movePizzaToNextStage(pizzaId));
    };
    const handleMarkAsPicked = (pizzaId) => {
        dispatch(markPizzaAsPicked(pizzaId));
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes} Min :${seconds < 10 ? '0' : ''}${seconds} Sec`;
    };

    return (
        <Card sx={{ width: '150px', height: 'auto', display: 'grid', justifyContent: 'center', background: redAlert ? '#eb2207' : '#50a69a' }}>
            <CardContent>
                <Typography variant="h6">
                    Pizza No{pizza.id}
                </Typography>
                <Typography variant="body2">
                    {formatTime(totalSeconds)}
                </Typography>
                {pizza.stage === 'Order Ready' ? <Button variant='contained' onClick={() => handleMarkAsPicked(pizza.id)}>Picked</Button> :
                    <Button variant='contained' onClick={() => handleMoveToNextStage(pizza.id)}>Next</Button>
                }

            </CardContent>
        </Card>
    );
};

export default PizzaCard;