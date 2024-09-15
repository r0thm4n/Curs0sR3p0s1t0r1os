### GUIA DE HIT Y GIT HUB @r0thm4n
####  Necesitas tener instaldo Git en local e inciamos con los comandos 
#### 1. Iniciaremos con Git 
------------
> 1. Configuración inicial  
Configura el nombre de usuario global para Git. (dentificación: Asocia tus cambios con tu identidad en el proyecto. Cuando otros revisen el historial del repositorio (por ejemplo, con git log), podrán ver quién hizo qué cambios.)

>Configura el correo electrónico global para Git.
Junto con tu nombre de usuario, el correo electrónico se utiliza para identificar quién ha realizado los cambios en un repositorio. Es visible cuando otros ven el historial de commits (git log), las contribuciones en plataformas como GitHub, GitLab, etc.

`git config --global user.name "Tu Nombre"`
`git config --global user.email "tuemail@example.com"`

#### 2. Comandos básicos de Git
`git init`
>Inicializa un nuevo repositorio Git en el directorio actual.

`git clone <URL>`
>Clona un repositorio remoto en tu máquina local.

`git status`
>Muestra el estado actual del repositorio, incluyendo archivos modificados, añadidos o en espera de commit.

`git add <archivo>`
>Añade un archivo o conjunto de archivos al área de preparación (staging area) para el próximo commit. Puedes usar . para añadir todos los archivos:

`git commit -m "mensaje"`
>Crea un nuevo commit con los archivos añadidos al área de preparación. El mensaje debe describir los cambios.

`git log`
>Muestra el historial de commits en el repositorio.

#### 3. Trabajar con ramas (branches)
`git branch`
>Muestra una lista de las ramas en el repositorio. También indica en qué rama estás trabajando.

`git branch <nombre_rama>`
>Crea una nueva rama.

`git checkout <nombre_rama>`
>Cambia a otra rama.

`git checkout -b <nombre_rama>`
>Crea y cambia a una nueva rama al mismo tiempo.

`git merge <nombre_rama>`
>Fusiona la rama especificada con la rama actual.

#### 4. Sincronización con repositorios remotos
`git remote add origin <URL>`
>Conecta el repositorio local a un repositorio remoto, normalmente llamado "origin".

`git push origin <nombre_rama>`
>Envía los commits de la rama actual al repositorio remoto.

`git pull`
>Descarga y fusiona los cambios del repositorio remoto con tu rama local.

`git fetch`
>Descarga los cambios del repositorio remoto, pero no los fusiona con tu rama local.

#### 5. Deshacer cambios
`git reset --hard <commit>`
>Restablece el repositorio al estado de un commit específico, eliminando cualquier cambio no confirmado.

`git reset --soft <commit>`
>Restablece el repositorio al estado de un commit específico, pero mantiene los cambios en el área de preparación.

`git revert <commit>`
>Crea un nuevo commit que deshace los cambios realizados en un commit anterior.

`git checkout -- <archivo>`
>Deshace los cambios locales en un archivo específico, volviendo a su última versión confirmada.

#### 6. Etiquetas (tags)
`git tag <nombre_etiqueta>`
>Crea una etiqueta en el commit actual (usualmente para marcar versiones).

`git push origin <nombre_etiqueta>`
>Sube una etiqueta al repositorio remoto.

#### 7. Comandos avanzados
`git stash`
>Guarda temporalmente los cambios que no han sido confirmados para poder trabajar en algo más sin perder tu progreso.

`git stash pop`
>Recupera los cambios guardados con git stash.

`git rebase <rama>`
>Mueve o aplica los cambios de una rama a otra.

https://git-scm.com/book/es/v2
https://pandao.github.io/editor.md/en.html
