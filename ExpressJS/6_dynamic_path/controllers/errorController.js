

exports.error404=(req,res,next)=>{
  res.statusCode=404;
  res.render('Oops ! page not found',{pageTitle:'Page is not found'});
    res.end();

}