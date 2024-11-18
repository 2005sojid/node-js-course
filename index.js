const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonParser = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');


const mongoose = require('mongoose');


const app = new Application();


app.addRouter(userRouter);
app.use(jsonParser);
app.use(parseUrl('http://localhost:' + PORT + '/'));


const start = async () => {
    try{
        await mongoose.connect('mongodb+srv://2005sojid:sojid2005@cluster0.taetr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()