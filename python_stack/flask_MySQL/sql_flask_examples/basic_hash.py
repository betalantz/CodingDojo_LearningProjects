import md5, os, binascii # include this at the top of your file
password = 'mercer'
hashed_password = md5.new(password).hexdigest()
print hashed_password
salt = binascii.b2a_hex(os.urandom(15))
print salt
