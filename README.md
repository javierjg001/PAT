# PAT - Práctica 2 - HTML puro
Enlaces de interés: 
- [Inicio del portal Web](https://javierjg001.github.io/PAT-Practicas/)
- [Repositorio GitHub](https://github.com/javierjg001/PAT-P2.git)

## Instrucciones

Se ha decidido que al ser una práctica de **HTML puro** no se usará más que esto,
por lo tanto no se ha querido añadir ninguna hoja de estilos en esta práctica
para poder asentar los conocimientos sobre el lenguaje puro para más adelante
poder añadir en las siguientes prácticas **css** pero teniendo una base sólida
y para no tener que depender de estas hojas de estilo.

Se ha añadido para cada página su respectivo **favicon** y **título**.

### Página principal
La página principal es la llamada **index.html** en la que se tiene
el menú principal, que va a estar presente en todas las demás páginas,
y la información sobre la empresa elegida, **Ferrovial**.

Se tiene el título con la etiqueta **title** en cada una de las páginas, mientras que
con la etiqueta **link** se ha creado el favicon para cada una de estas.

> **Cabe destacar:** El logo que aparece al principio de la página es un 
hipervínculo a la página principal **index.html** por lo que siempre se podrá voler
a esta, mientras que el menú son hipervínculos a sus respectivas páginas, tanto 
las fotografías que aparecen encima de los botones como estos.

Para realizar el menú de botones que va a estar presente en todas la páginas se 
creó una tabla para poder añadir estos componentes con la etiqueta **table** y 
se han aádido las imágenes y botones en cada una de estas celdas.

El vídeo que aparece en esta página se ha obtenido de la página oficial de la compañía y
se ha añadido mediante la etiqueta **video** en la que se han pasado varios atributos,
como el atributo **autoplay**, o **muted**, o **loop**.

En cuanto a la etiqueta **footer**, se ha añadido con un estilo el color del fondo,
que es el color corporativo de la empresa, en esta zona se tiene la parte
**Sobre nosotros** en la cual se han añadido las etiquetas de títulos,
**h2** y **h2** y las de párrafos **p**. Se tienen también botones (etiqueta **button**) de 
interés que redigirán (mediante la etiqueta **a**) a la página oficial de la compañía.

### Autopistas
En el momento que se accede a la página **autopistas.html** se observa los títulos y 
párrafos que se han añadido, las imágenes y el vídeo sobre datos de las autopistas creadas
por esta compañía y cabe resaltar que en el **footer**, donde en la página principal se tenían
los datos sobre la empresa aquí se tiene un formulario para poder ser registrado. Para dicho
formulario se han usado las etiquetas **label** e **input** para poder añadir tanto el nombre
de lo que se desea que el usuario añada y la herramienta para añadirlo, en algunos casos
es un email, por lo que se usa el tipo de email, en otros es una contraseña, por lo que se 
usa el tipo de este o en otros es un texto. En todos ellos se ha añadido también el atributo
**required** para que sea obligatorio para el usuario añadir dicho parámetro y con la forma
específica, por ejemplo, sino se añade una sintáxis de email (email@ejemplo.com) no se acepta 
dicho parámetro. En algunos casos también se ha añadido el atributo **placeholder** para
que aparezca ya un texto predeterminado de ejemplo.
Se ha creado también otros tipos de **input**, como el **form-select** en el que se tiene que 
escoger una de las provincias propuestas por la página. Y un **checkbox** para que el usuario pueda
elegir si desea recibir correos electrónicos de la compañía. Y, por último, se tiene el botón de 
**submit** que se le ha podido añadir un atributo de **onlick**, con el cual al pulsar
se crea un mensaje de alerta al usuario para comentar que los datos han sido registrados, pero 
si se añadía este atributo cada vez que se pulsaba, esté o no el formulario completo, se le aparecerá
al usuario este mensaje, por lo tanto para mantener la funcionalidad del atributo de los 
input **required** se ha decidido suprimir onlick. Este formulario aparecerá en todas las demás páginas que se verán a continuación.

### Aeropuertos
De la misma forma que se tenía en la página de las autopistas, en **aeropuertos.html**
se tienen datos (párrafos y títulos), imágenes y un vídeo para explicar este sector.

Y como se ha comentado, el formulario se tiene del mismo modo. 

### Construcción
La misma estructura que en la página de aeropuertos se ha usado en la página
**construccion.html** para explicar los datos sobre este sector de la compañía.

### Otros negocios
Para la página de **otros-negocios.html** se tiene una tabla en la que de una forma
más visual se representan los datos de relevancia, con las etiquetas **th** para los
títulos y **td** para las demás celdas.