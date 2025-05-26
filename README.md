
The db uses json-server with a `db.json` database.
```bash
cd db
npm install
npm start
```

La aplicacion 
The front-end is built with Angular.
```bash
cd app-gastos
npm install
npm start
```

// Tengo que reconocer que he intentado terminar el trabajo hasta el final pero sinceramente no puedo mas , he hecho mas de 5 intentos desde cero , porque siempre por el camino me he bloqueado , he tropezado y he encontrado caminos sin salida y tuve que cambiar de idea.
queria hacer la parte de login de echo me parecia la mas facil pero x falta de tiempo tuve que renunciar a ella 

lo mas facil que me parecia de angular era conectar los componentes pero resulta que al final del proyecto quise seguir para poder hacer los filtros y la parte de estadisticas y resulta que la ruta no me iba  

no era capaz de mostrar en el explorador el componente de estadisticas 

con lo cual no he creado ni el formulario reactivo ni el grafico ni el buscador ni nada ! 
todo esto me quedara pendiente para seguir estudiandolo ! 
No voy a hacer mas comentarios ni explicaciones , he usado todo lo que tuve a mi alcanze para llegar hasta aqui , tambien me vi las clases 7000 veces pero es muy dificil adaptar la de la gestion de usuarios a esto de la gestion de gastos x que al final x el camino se pierde uno y nada ,
un suspenso bien merecido y siento mucho no haber dado mejor resultado! 
Dentro de mi se que lo di todo y que me esforze al maximo de aprender angular e intentar comprenderlo todo con sus detalles , pero es verdad que se necesita mucha paciencia y mucho tiempo de estudio!


// esta parte de comentario la estoy escribiendo hoy lunes 26/05/2025 a las 16:50h , he dicho ayer en el comentario anterior que no queria hacer mas comentarios pero ya que me preguntaste pues te comento : 
 -el mayor fallo que cometi en este proyecto ha sido no saber como integrar un nuevo componente en un proyecto ya existente que ya tiene varios componentes y poder seguir con la logica 
 - desde el principio en mi cabeza cuando hablamos de users (piensas en login ) osea el primer componente que deberia de haber creado era el de login de hecho en el primer intento de hacer el proyecto asi empece ,pero en la presentacion final lo deje pendiente de hacer (al que al final no llegue)
 - y despues de varios intentos de complicarme la vida en crear componentes en llegar hasta la creacion de rutas y estilar un poco los htmls de los componentes para que se vean en la pagina , decidi empezar con un componente padre y dos componentes integrados en el componente padre y un componente aparte que era el de ingresar presupuesto 
 - despues de realizar el primer paso de ingresar un presupuesto , (valido ) , que si no te da un mensaje de error , hice la funcionalidad del boton de "Aceptar" para que el presupuesto se anote en una variable llamada "presupuesto " que se encuentra dentro de un servicio llamado presupuesto.service.
- el servicio creado (presupuesto.service) aparte de la propiedad presupuesto tiene otra que se llama restante y que es la propiedad que nos muestra cuanto dinero nos quedaria despues de ingresar un gasto  de "x" valor,
- se me olvido especificar desde el principio que tome la decision de ultilizar bootstrap para estilar mas rapido los textos y los inputs de los formularios , aunque personalmente me gusta mas estilar con css (la razon por la que no lo hice fue la presion y el poco tiempo disponible )
- he intentado conectar de la mejor manera posible los componentes y las rutas entre si - cosa que ha funcionado de maravilla - excepto despues de crear el ultimo componente que se llama estadisticas 
- tenia un poco de dudas sobre la implementacion OnInit asi que la puse casi en todos los componentes desde el principio y deje la funcion ngOnInit vacia - en alguna de ellas hacia las llamadas de los servicios 
- aparte de todos los problemas anteriormente mencionados uno de los peores fue intentar levantar el backend- parecia todo muy sencillo - donde tienes los ficheros .json abres el cmd 
escribes el comando npm-install y a los pocos segundos npm-start , que paso ??? que yo intentaba hacer eso teniendo en la carpeta solamente y unicamente un fichero que era de tipo .json y que contenia unos pocos datos aunque se que se podria incializar solo con el nombre del objeto vacio. 
- si en esa carpeta en vez de solo un fichero db.json hubiese tenido el otro tambien que se llamase package.json el backend hubiese arrancado muy facil con los comandos y luego me hubiese mostrado los endpoints con los puertos disponibles que normalmente y por defecto uno seria "localhost:3000" ; si eso pasase que hubiera hecho ???
- pues ir al servicio donde injectamos la llamada http hubiesemos creado una variable llamada apiUrl y hubiera puesto esta direccion url del localhost como valor de esa api --- de esa manera  hibiera conseguido hacer todos los metodos de tipo "get"  "post" "update" y "delete" de manera facil y sin complicaciones , de hecho esa logica la tienes puesta --- otra cosa es que funcione --- 
- lo que si esta claro que esos metodos devuelven observables que pueden ser tipados de tipo interfaces y luego esos datos los recibiriamos en otras variables ej GastoString
-para poder recibir estos observables esta clarisimo que hay que subscribirse a ellos si no solo te devuelven el valor una vez 

-hasta aqui todo mas o menos claro aunque te digo que he tropezado un millon de veces y no logre hacer todo que funcione 
- ni si quiera fui capaz de que la interfaz que he creado sea del tipo que yo queria para luego poder crear datos de ese tipo de interfaz y esos datos guardarlos en localStorage en este caso en db en el backend que llamamos 

- cuando ya x fin me rendi y vi que no podia seguir mas en los componentes principales quise crear un componente llamado "estadisticas" y otro servicio llamado igual , y me fui a la app.routes.ts para agregar esa ruta -hasta aqui todo bien 
- pero cuando en el componente gastos se hace click y se invoca la funcion verEstadisticas() y ponemos que dentro de la funcion verEstadisticas que ejecuta un router ya injectado y que iba a ir a la ruta (["/estadisticas"]) , en la pagina no mostraba nada y te mandaba al incio al primer componente -- y asi pasaron las ultimas 4 horas intentando hacer que eso funcione 
- x eso ni componente login - ni ruta funcionable de estadisticas - ni intento de grafico o de buscadores para hacer el filter - ni nada ! 
Decepcion total 


que haria para que todo funcionase ---
haria lo siguiente si fuera un experto : 
    
    -limpio el codigo de errores leyendo las rutas que hay en la app y veo yo que funcionan -- las demas las borro
    -no se si se puede pero crearia componentes nuevos y buscaria la manera correcta de  integrarlos en mi app 
    -haria el componente login
    -haria el filter y el buscador 
    -haria el grafico (despues de realizar los filtros )
    - me aseguro de tener una interfaz buena que me crea los datos que guardo del tipo que yo quiero para cuando los necesite se puedan integrar en mi formulario reactivo de manera correcta 
    - haria el mapeo y los filtros para poder clasificar los gastos 
    -cambiaria totalmente la estructura de los formularios para poder agregar los validatores adecuados a cada uno de los inputs 
    - al final pero al final del todo le daria estilos guay a la pagina clases y colores a los botones y fonts a los textos 
    y por ultimo haria una prueba 
    y si fuera experto experto realizaria el test del codigo 

    Pero......no lo soy 

    