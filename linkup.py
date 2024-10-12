import pandas as pd
from jinja2 import Template
from IPython.display import HTML
df = pd.read_csv('local_weather.csv')

temperature = df['temp']
humidity = df['humidity']
wind_speed = df['windspeed']

weather_data = {
    'temperature': temperature,
    'humidity': humidity,
    'wind_speed': wind_speed
}

template = Template(open('weather.html').read())
html_output = template.render(weather_data=weather_data)

HTML(html_output)