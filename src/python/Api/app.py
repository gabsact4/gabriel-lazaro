from flask import Flask, render_template
from python.analise import gerar_dashboard

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    grafico, tabela = gerar_dashboard()
    return render_template('dashboard.html', grafico=grafico, tabela=tabela)

if __name__ == '__main__':
    app.run(debug=True)
