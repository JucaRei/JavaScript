import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    // os dois elementos estarão disponibilizados diretamente, sem ter uma tag que envolva eles 2 (pro layout funcionar corretamente, lembrando que não pode jsx adjacente)
    <React.Fragment>
        {/* {...props} propriedades que eu recebi no main estão sendo propagadas pro header */}
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>