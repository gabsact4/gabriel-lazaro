import pandas as pd
import plotly.express as px
from python.conexao import get_connection

def gerar_dashboard():
    conn = get_connection()
    query = "SELECT categoria, data, valor FROM vendas ORDER BY data"
    df = pd.read_sql(query, conn)
    conn.close()

    fig = px.area(df, x='data', y='valor', color='categoria', title="Vendas por Categoria")
    grafico_html = fig.to_html(full_html=False)

    tabela_html = df.to_html(classes='table table-striped', index=False)

    return grafico_html, tabela_html
