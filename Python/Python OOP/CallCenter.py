class CallCenter(object):
    def __init__(self, calls):
        # self.name = name
        self.callList = calls
        self.queue = 0

    def add(self, new_call):
        self.callList.append(new_call)
        self.queue =+ 1
        return self

    def remove(self):
        print "======================="
        print "Removing {} from call list.".format(self.callList(0))
        self.callList.pop(0)
        self.queue -= 1
        return self

    def info(self):
        for call in self.callList:
            i = 0
            print "/\/\/\/\/\/\/\/\/\/"
            print "Caller: ", call.name
            print "Caller's phone: ", call.phone
            print "Callers in queue: ", i
            i =+ 1
        return self



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

call_a = Call(9,'Mrs. Bixby', '206.345.3322', '13:36', 'program inquiry')
call_b = Call(10, 'Tom Schneider', '425.567.5432', '13:42', 'bug report')
call_c = Call(11, 'JarJar', '010.101.0101', '14:02', 'just annoying')
nc = CallCenter([call_a, call_b, call_c])
nc.add(Call(12, 'Ada Lovelace', '360.063.9090', '13:51', 'a great idea')).info()
nc.remove().info()
print nc