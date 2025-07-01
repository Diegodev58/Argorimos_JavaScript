User: como sera la peticon desdes react usando reducer y state con axion
Kimi: Para realizar peticiones desde React usando Redux (con reducers y state) y Axios, primero necesitas configurar Redux en tu proyecto React. A continuación, te proporciono un ejemplo completo de cómo hacerlo.

### 1. Configuración inicial

Primero, instala las dependencias necesarias:

```bash
npm install redux react-redux axios
```

### 2. Configuración de Redux

Crea los archivos necesarios para configurar Redux:

```javascript
// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
```

### 3. Crear Redux Reducer

Crea un reducer para gestionar el estado de los productos:

```javascript
// reducers/productReducer.js
import { 
  OBTENER_PRODUCTOS, 
  OBTENER_PRODUCTO_DETALLE, 
  CREAR_PRODUCTO, 
  ACTUALIZAR_PRODUCTO, 
  ELIMINAR_PRODUCTO,
  BUSCAR_PRODUCTOS
} from '../actions/types';

const initialState = {
  productos: [],
  producto: null,
  loading: true,
  error: null
};

export default function productoReducer(state = initialState, action) {
  switch (action.type) {
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
        loading: false
      };
    case OBTENER_PRODUCTO_DETALLE:
      return {
        ...state,
        producto: action.payload,
        loading: false
      };
    case CREAR_PRODUCTO:
      return {
        ...state,
        productos: [action.payload, ...state.productos],
        loading: false
      };
    case ACTUALIZAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.map(producto => 
          producto._id === action.payload._id ? action.payload : producto
        ),
        producto: action.payload,
        loading: false
      };
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.filter(producto => producto._id !== action.payload),
        loading: false
      };
    case BUSCAR_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
```

### 4. Crear Redux Action

Crea las acciones para realizar las peticiones HTTP con Axios:

```javascript
// actions/productActions.js
import axios from 'axios';
import { 
  OBTENER_PRODUCTOS, 
  OBTENER_PRODUCTO_DETALLE, 
  CREAR_PRODUCTO, 
  ACTUALIZAR_PRODUCTO, 
  ELIMINAR_PRODUCTO,
  BUSCAR_PRODUCTOS
} from './types';

export const obtenerProductos = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:3000/api/productos');
    dispatch({
      type: OBTENER_PRODUCTOS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: OBTENER_PRODUCTOS,
      payload: null,
      error: error.response.data || error.message
    });
  }
};

export const obtenerProductoDetalle = id => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:3000/api/productos/${id}`);
    dispatch({
      type: OBTENER_PRODUCTO_DETALLE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: OBTENER_PRODUCTO_DETALLE,
      payload: null,
      error: error.response.data || error.message
    });
  }
};

export const crearProducto = productoData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post(
      'http://localhost:3000/api/productos',
      productoData,
      config
    );
    dispatch({
      type: CREAR_PRODUCTO,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: CREAR_PRODUCTO,
      payload: null,
      error: error.response.data || error.message
    });
  }
};

export const actualizarProducto = (id, productoData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.put(
      `http://localhost:3000/api/productos/${id}`,
      productoData,
      config
    );
    dispatch({
      type: ACTUALIZAR_PRODUCTO,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: ACTUALIZAR_PRODUCTO,
      payload: null,
      error: error.response.data || error.message
    });
  }
};

export const eliminarProducto = id => async dispatch => {
  try {
    await axios.delete(`http://localhost:3000/api/productos/${id}`);
    dispatch({
      type: ELIMINAR_PRODUCTO,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: ELIMINAR_PRODUCTO,
      payload: id,
      error: error.response.data || error.message
    });
  }
};

export const buscarProductos = (nombre, precio) => async dispatch => {
  try {
    let query = '?';
    if (nombre) query += `nombre=${nombre}&`;
    if (precio) query += `precio=${precio}`;
    const res = await axios.get(`http://localhost:3000/api/productos/buscar${query}`);
    dispatch({
      type: BUSCAR_PRODUCTOS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: BUSCAR_PRODUCTOS,
      payload: null,
      error: error.response.data || error.message
    });
  }
};
```

### 5. Combinar Reducers

Combina todos los reducers en el archivo root reducer:

```javascript
// reducers/index.js
import { combineReducers } from 'redux';
import productoReducer from './productReducer';

export default combineReducers({
  producto: productoReducer
});
```

### 6. Proveer el store en la aplicación

Envuelve tu aplicación con el `Provider` de Redux:

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### 7. Crear Componentes React

Crea componentes React para interactuar con los datos:

```javascript
// components/ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductos } from '../actions/productActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const { productos, loading, error } = useSelector(state => state.producto);

  useEffect(() => {
    dispatch(obtenerProductos());
  }, [dispatch]);

  if (loading) return <h2>Cargando...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto._id}>{producto.nombre} - ${producto.precio}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
```

### 8. Crear un componente para crear un producto

```javascript
// components/CreateProduct.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearProducto } from '../actions/productActions';

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      crearProducto({
        nombre,
        precio: parseFloat(precio),
        descripcion
      })
    );
  };

  return (
    <div>
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            value={precio}
            onChange={e => setPrecio(e.target.value)}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
          />
        </div>
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default CreateProduct;
```

### 9. Crear un componente para actualizar un producto

```javascript
// components/UpdateProduct.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductoDetalle, actualizarProducto } from '../actions/productActions';

const UpdateProduct = ({ match }) => {
  const dispatch = useDispatch();
  const { producto, loading, error } = useSelector(state => state.producto);

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    dispatch(obtenerProductoDetalle(match.params.id));
  }, [dispatch, match.params.id]);

  useEffect(() => {
    if (producto) {
      setNombre(producto.nombre);
      setPrecio(producto.precio.toString());
      setDescripcion(producto.descripcion || '');
    }
  }, [producto]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      actualizarProducto(match.params.id, {
        nombre,
        precio: parseFloat(precio),
        descripcion
      })
    );
  };

  if (loading) return <h2>Cargando...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>Actualizar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            value={precio}
            onChange={e => setPrecio(e.target.value)}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
          />
        </div>
        <button type="submit">Actualizar Producto</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
```

### 10. Crear un componente para eliminar un producto

```javascript
// components/DeleteProduct.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { eliminarProducto } from '../actions/productActions';

const DeleteProduct = ({ match, history }) => {
  const dispatch = useDispatch();

  const handleEliminar = () => {
    dispatch(eliminarProducto(match.params.id));
    history.push('/productos');
  };

  return (
    <div>
      <h2>Eliminar Producto</h2>
      <p>¿Estás seguro de que quieres eliminar este producto?</p>
      <button onClick={handleEliminar}>Eliminar</button>
    </div>
  );
};

export default DeleteProduct;
```

### 11. Crear un componente para buscar productos

```javascript
// components/SearchProducts.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buscarProductos } from '../actions/productActions';

const SearchProducts = () => {
  const dispatch = useDispatch();
  const { productos, loading, error } = useSelector(state => state.producto);

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(buscarProductos(nombre, precio));
  };

  if (loading) return <h2>Cargando...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>Buscar Productos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            value={precio}
            onChange={e => setPrecio(e.target.value)}
          />
        </div>
        <button type="submit">Buscar</button>
      </form>
      {productos && (
        <ul>
          {productos.map(producto => (
            <li key={producto._id}>{producto.nombre} - ${producto.precio}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchProducts;
```

### 12. Componente principal App.js

```javascript
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeleteProduct';
import SearchProducts from './components/SearchProducts';

function App() {
  return (
    <Router>
      <div>
        <h1>Administración de Productos</h1>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/crear" component={CreateProduct} />
          <Route exact path="/actualizar/:id" component={UpdateProduct} />
          <Route exact path="/eliminar/:id" component={DeleteProduct} />
          <Route exact path="/buscar" component={SearchProducts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

### Explicación:

1. **Configuración de Redux**:
   - Se crea un store en `store.js` y se configura con el middleware `thunk` para manejar acciones asíncronas.

2. **Reducer**:
   - El reducer `productoReducer` gestiona el estado de los productos y actualiza el estado en respuesta a diferentes acciones.

3. **Actions**:
   - Las acciones `productActions` definen las operaciones CRUD y la búsqueda, utilizando Axios para realizar peticiones HTTP a la API.

4. **Componentes React**:
   - Se crean componentes para listar, crear, actualizar, eliminar y buscar productos.
   - Se utilizan los hooks `useDispatch` y `useSelector` de React Redux para interactuar con el store.

5. **Rutas**:
   - Se configuran las rutas en `App.js` para navegar entre los diferentes componentes.

Este ejemplo proporciona una estructura completa para interactuar con una API desde una aplicación React utilizando Redux y Axios. Puedes adaptarlo y expandirlo según las necesidades específicas de tu proyecto.
