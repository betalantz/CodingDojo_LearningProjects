# create the CallCenter class and its methods
class CallCenter(object):  # will pass in Call objects from Call class
    def __init__(self, calls):
        self.callList = calls
        self.queue = len(self.callList)

    def add(self, new_call):
        print "+++++++++++++++++++++++"
        print "Adding a call to list..."
        self.callList.append(new_call)
        self.queue = len(self.callList)
        return self

    def remove(self):
        print "======================="
        print "Removing first call from list..."
        self.callList.pop(0)
        self.queue = len(self.callList)
        return self

    def info(self):
        for call in self.callList:
            print "/\/\/\/\/\/\/\/\/\/"
            print "Caller: ", call.name
            print "Caller's phone: ", call.phone
            print "Callers in queue: ", self.queue
        return self

# creating a Call class that can send Call values to the CallCenter class
class Call(object):
    def __init__(self, ident, name, phone, time, reason):
        self.ident = ident
        self.name = name
        self.phone = phone
        self.time = time
        self.reason = reason
    def displayCall(self):
        print '**********************'
        print 'Call ID: {}'.format(self.ident)
        print 'Caller Name: {}'.format(self.name)
        print 'Phone No.: {}'.format(self.phone)
        print 'Time of call: {}'.format(self.time)
        print 'Reason for call: {}'.format(self.reason)
        return self

# creating instances of calls to pass to the methods, and invoking the methods
call_a = Call(9,'Mrs. Bixby', '206.345.3322', '13:36', 'program inquiry').displayCall()
call_b = Call(10, 'Tom Schneider', '425.567.5432', '13:42', 'bug report').displayCall()
call_c = Call(11, 'JarJar', '010.101.0101', '14:02', 'just annoying').displayCall()
nc = CallCenter([call_a, call_b, call_c])
nc.add(Call(12, 'Ada Lovelace', '360.063.9090', '13:51', 'a great idea')).info()
nc.remove().info()
# print nc