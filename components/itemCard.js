import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Image from 'next/image';
import ButtonBase from '@material-ui/core/ButtonBase';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Tooltip from '@material-ui/core/Tooltip';
import Link from 'next/link';

class ItemCard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            a: []
        };
    }

    onClick = (event) => {
        event.preventDefault();
    };

    imageTooltipcomp = React.forwardRef(function imageTooltipcomp(props,ref){
        // console.log(props);
        return <div {...props} ref={ref}>                                <Image
            src={
                'https://maple-market-db.herokuapp.com/api/item/' +
                props.props.id +
                '/img'
            }
            alt={props.props.name}
            width={64}
            height={64}
        />
        </div>;
    });

    render (props) {
        let card;
        if (this.props.type == 'suggestion') {
            card = (
                <Card className={'bg-transparent'}>
                    <ButtonBase
                        className='h-full w-full'
                        onClick={() =>
                            typeof this.props.handleItemChange === 'function'
                                ? this.props.handleItemChange(this)
                                : void 0
                        }
                    >
                        <CardContent className='h-full w-full'>
                            {/* <Typography variant='body2' component='h6'>
          {this.props.name}
      </Typography>
      <Typography className='typo' color='textSecondary'>
          {this.props.price}
      </Typography> */}
                            <Image
                                src={
                                    'https://maple-market-db.herokuapp.com/api/item/' +
                                    this.props.id +
                                    '/img'
                                }
                                alt={this.props.itemName}
                                width={64}
                                height={64}
                            />
                        </CardContent>
                    </ButtonBase>
                </Card>
            );
        }
        else {
            card = (
                <Card
                    className={
                        // this.props.pchange > 0 ? 'bg-green-300' : 'bg-red-300'
                        'bg-white'
                    }
                >
                    <ButtonBase className='h-full w-full'>
                        <CardContent className='h-full w-full'>
                            {/* <Typography variant='body2' component='h6'>
          {this.props.name}
      </Typography>
      <Typography className='typo' color='textSecondary'>
          {this.props.price}
      </Typography> */}     <Tooltip title={this.props.itemName} arrow>

                                <this.imageTooltipcomp props={this.props} />
                            </Tooltip>
                        </CardContent>
                    </ButtonBase>

                    <CardContent className='cursor-pointer'>
                        <Typography variant='subtitle1' align='center'>
                            {this.props.pchange > 0 ? <ArrowUpwardIcon className="fill-current text-green-600"/> : <ArrowDownwardIcon className="fill-current text-red-600"/>}{' '}
                            {this.props.pchange}
                        </Typography>
                    </CardContent>
                </Card>
            );
        }

        let link;
        if (this.props.type == 'suggestion') {
            link = '#';
        }
        else {
            link = `/prices/items/${encodeURIComponent(this.props.id)}`;
        }

        const linkprops = {
            href: link,
            onClick: this.onClick
        };
        return (
            <Link {...linkprops} passHref>
                {card}
            </Link>
        );
    }
}

export default ItemCard;
