# Comandos en MySQL alta usuarios y Permisos 
Para crear un usuario en MySQL y otorgarle todos los permisos sobre una base de datos específica, como tu base de datos llamada `cotizacion`, puedes seguir los pasos a continuación. Asegúrate de tener acceso como usuario `root` o como un usuario que tenga privilegios suficientes para crear otros usuarios y otorgar permisos.

## Paso 1: Ingresar a MySQL
> Primero, abre la línea de comandos y conéctate a MySQL como el usuario root. Puedes hacerlo con el siguiente comando:

```bash
mysql -u root -p
```
Luego, se te pedirá que ingreses la contraseña de root. Después de ingresar la contraseña, deberías ver el prompt de MySQL.

## Paso 2: Crear un nuevo usuario
Usa el siguiente comando para crear un nuevo usuario. Cambia `nombre_usuario` y contraseña por los valores deseados. Por ejemplo, para crear un usuario llamado `usuario_cotizacion` con la contraseña `mi_contraseña_segura`:

```sql
CREATE USER 'usuario_cotizacion'@'localhost' IDENTIFIED BY 'mi_contraseña_segura';
```
- ` 'usuario_cotizacion'`: es el nombre del usuario que estás creando.
- `'localhost'`: indica que el usuario solo podrá conectarse desde la misma máquina. Si necesitas que se conecte desde cualquier dirección, usa `'%'` en lugar de `'localhost'`.
- `'mi_contraseña_segura'`: es la contraseña que asignas al nuevo usuario.

## Paso 3: Otorgar permisos
Para otorgar todos los permisos sobre la base de datos `cotizacion` al nuevo usuario, utiliza el siguiente comando:
```sql
GRANT ALL PRIVILEGES ON cotizacion.* TO 'usuario_cotizacion'@'localhost';

```

- `ALL PRIVILEGES`: otorga todos los permisos, incluyendo `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, etc.
- `cotizacion`.*: indica que se están otorgando permisos en todas las tablas de la base de datos `cotizacion`.
- `'usuario_cotizacion'@'localhost':` especifica el usuario al que se le otorgan los permisos.

## Paso 4: Aplicar los cambiosPaso 4: Aplicar los cambios
Después de otorgar los permisos, es importante aplicar los cambios. Ejecuta el siguiente comando:
```sql
FLUSH PRIVILEGES;
```

## Paso 6: Salir de MySQL
Finalmente, puedes salir de la consola de MySQL escribiendo:
```sql
EXIT;
```
## Resumen de los comandos

1. Ingresar a MySQL:
```bash
mysql -u root -p
```
2. Crear un nuevo usuario:
```sql
CREATE USER 'usuario_cotizacion'@'localhost' IDENTIFIED BY 'mi_contraseña_segura';
```
3. Otorgar permisos:
```sql
GRANT ALL PRIVILEGES ON cotizacion.* TO 'usuario_cotizacion'@'localhost';
```
4. Aplicar cambios:
```sql
FLUSH PRIVILEGES;
```
5. Verificar permisos (opcional):
```sql
SHOW GRANTS FOR 'usuario_cotizacion'@'localhost';
```
6. Salir de MySQL:
```sql
EXIT;
```

## Otorgar permisos específicos
A continuación, puedes otorgar permisos específicos usando el comando GRANT. Aquí hay algunos ejemplos de permisos que podrías querer otorgar:

**SELECT**: Permite leer datos de la tabla.
**INSERT**: Permite agregar nuevos registros a la tabla.
**UPDATE**: Permite modificar registros existentes en la tabla.
**DELETE**: Permite eliminar registros de la tabla.
**CREATE**: Permite crear nuevas tablas en la base de datos.
**DROP**: Permite eliminar tablas de la base de datos.

### Ejemplo de otorgar permisos específicos
Si deseas otorgar solo los permisos de `SELECT`, `INSERT` y `UPDATE` en todas las tablas de la base de datos cotizacion, utilizarías el siguiente comando:

```sql
GRANT SELECT, INSERT, UPDATE ON cotizacion.* TO 'usuario_cotizacion'@'localhost';
```
### Aplicar los cambios
Después de otorgar los permisos, aplica los cambios:

```sql
FLUSH PRIVILEGES;
```
### Salir de MySQL
Finalmente, puedes salir de MySQL escribiendo:
```sql
EXIT;
```

