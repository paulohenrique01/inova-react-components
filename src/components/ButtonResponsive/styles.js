import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(2),
    },
}));

export default useStyles;
/*
Para compilar: npm run compile

Referências:
https://fathomtech.io/blog/create-a-react-component-library-using-create-react-app/

Para usar como link em vez de repositório => 
https://stackoverflow.com/questions/31169760/how-to-avoid-react-loading-twice-with-webpack-when-developing/38818358#38818358
https://imasters.com.br/front-end/configurando-alias-no-webpack

*/