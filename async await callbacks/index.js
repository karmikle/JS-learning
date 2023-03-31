loadScript('/my/script.js', function(script) {

    loadScript('/my/script2.js', function(script) {
  
      loadScript('/my/script3.js', function(script) {
        // ...и так далее, пока все скрипты не будут загружены
      });
  
    })
  
});

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));
  
    document.head.append(script);
} 

loadScript('/my/script.js', function(error, script) {
    if (error) {
      // обрабатываем ошибку
    } else {
      // скрипт успешно загружен
    }
});

loadScript('1.js', function(error, script) {

    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('2.js', function(error, script) {
        if (error) {
          handleError(error);
        } else {
          // ...
          loadScript('3.js', function(error, script) {
            if (error) {
              handleError(error);
            } else {
              // ...и так далее, пока все скрипты не будут загружены (*)
            }
          });
  
        }
      })
    }
});

loadScript('1.js', function(error, script) {

    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('2.js', function(error, script) {
        if (error) {
          handleError(error);
        } else {
          // ...
          loadScript('3.js', function(error, script) {
            if (error) {
              handleError(error);
            } else {
              // ...и так далее, пока все скрипты не будут загружены (*)
            }
          });
  
        }
      })
    }
});