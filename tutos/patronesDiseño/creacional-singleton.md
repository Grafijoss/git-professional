## Singleton
***

Te asegura que una clase solo tiene una instancia

Esta unica instancia puede ser consumida por cualwuier objeto

- El constructor es privado
- El constructor tiene el mismo nombre de la clase
- El constructor es privad
- - No podemos instanciar la clase
- - No podemos hacer New clase
- getInstance()_ es public verifica si ya existe la instancia y si no existe la crea y la regrsa
- -  si llamamos a getInstance() nuevamente regresa la instancia que ya esta creada
- Es util cuando queremos garantizar que solo tenemos una instancia, por ejemplo cuando no queremos que se abra una modal encima de otra