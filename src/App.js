
import './App.css';
import Tabs from './componets/tabs';

function App() {
    return (
        <div className="App">
            <Tabs tabscontent = { [{tab: 'tab1', content:'this react stack does not make much sense' },
                                    {tab: 'tab2', content:'I hate this soooo much' },
                                    {tab: 'tab3', content: 'Because I WANT TO MAKE YOU MAD'},
                                    {tab: 'tab4', content: 'YOU ARE BASIC!!!'}] }></Tabs>
        </div>
    );
}

export default App;
