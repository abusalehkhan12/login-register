from flask import Flask,jsonify,request,json
from flaskext.mysql import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
mysql=MySQL()
app.config['MYSQL_DATABASE_HOST']='localhost'
app.config['MYSQL_DATABASE_USER']='root'
app.config['MYSQL_DATABASE_PASSWORD']='ABUSALEH.kh12'
app.config['MYSQL_DATABASE_DB']='login'
mysql.init_app(app)

@app.route('/login',methods=['POST'])
def login():
    con=mysql.connect()
    cursor=con.cursor()

    email=request.get_json()['email']
    password=request.get_json()['password']
    result=""
    query='select * from user where email="{email}"'.format(email=email)
    print(query)
    cursor.execute(query)
    data=cursor.fetchone()
    if(data==None or email=="" or password==""):
        result="denied"
    elif (data[1]==password):
        result="access"
    else:
        result="denied"
    return jsonify(result)

@app.route('/register',methods=['POST'])
def register():
    conn = mysql.connect()
    cursor=conn.cursor()

    fname=request.get_json()['fname']
    lname=request.get_json()['lname']
    email=request.get_json()['email']
    password=request.get_json()['password']
    contact=request.get_json()['contact']
    image=request.get_json()['image']
    query = 'insert into user(email,password,fname,lname,contact) values( "{email}","{password}","{fname}","{lname}","{contact}")'.format(
        email = email,
        fname=fname,
        lname=lname,
        password=password,
        contact=contact
    )
    cursor.execute(query)
    conn.commit()
    return jsonify("True")

@app.route('/profile',methods=['POST'])
def profile():
    con=mysql.connect()
    cursor=con.cursor()
    email=request.get_json()['email']
    query='select * from user where email="{email}"'.format(email=email)
    cursor.execute(query)
    data=cursor.fetchone()
    return jsonify(data)

@app.route('/update',methods=['POST'])
def update():
    con=mysql.connect()
    cursor=con.cursor()
    fname=request.get_json()['firstname']
    lname=request.get_json()['lastname']
    email=request.get_json()['email']
    contact=request.get_json()['contact']
    image=request.get_json()['image']

    cursor.execute("update user set fname='{fname}',lname='{lname}',email='{email}',contact='{contact}',image='{image}' where email='{email}'".format(
        fname=fname,
        lname=lname,
        email=email,
        contact=contact,
        image=image
    ))
    con.commit()
    con.close()
    return "updated"


if (__name__ == "__main__"):
    app.run(debug=True)
