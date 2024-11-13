

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
        <div>
            <img className="h-30 w-80" src="https://i.ibb.co/6HdstPk/Error-Animation.gif" />
        </div>
        <div className="m-6 ">
            <p className="text-2xl  text-red-600 pb-2"> Page can not found,loading error ........  </p>
            <a href="/"><button className="btn btn-outline btn-accent"> Go Back Home</button></a>
            
        </div>
    </div>
);
};

export default ErrorPage;