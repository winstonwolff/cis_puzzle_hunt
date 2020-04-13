#!/usr/bin/env python3

'''Tasks related to deploying and managing public servers'''

import sys
from subprocess import Popen, PIPE, STDOUT, CalledProcessError
from pathlib import Path

HERE = Path(__file__).parent
BUILD_DIR = HERE / 'build'

PRODUCTION_SSH = 'winston@puzzle-hunt.com'
def production():
    '''Publish to production server'''

    _run(['yarn', 'build'])

    destination_dir = '/home/winston/puzzle-hunt.com/public_html/'
    dest = PRODUCTION_SSH + ':' + destination_dir
    _run(['rsync', '-av', '--delete',
          '--omit-dir-times',
          '--no-perms',
          str(BUILD_DIR) + '/',
          dest])

def _run(cmd, show_cmd=False):
    '''run command, indenting output'''
    if show_cmd: print(cmd)
    main = Popen(cmd, stdout=PIPE) #, stderr=STDOUT)
    sed = Popen(['sed', 's/^/    /g'], stdin=main.stdout)
    main.wait()
    sed.wait()
    if main.returncode:
        raise Exception("Command returned: %d" % main.returncode)


if __name__=='__main__':
    avail_cmds = {k:v for k,v in locals().items()
        if not k.startswith('_') and callable(v) and v.__module__=='__main__'}
    try:
        cmd = avail_cmds[sys.argv[1]]
    except Exception as exc:
        print(type(exc).__name__, ':', exc,
            '\n         Usage:', __file__, '<command>'
            '\n         where commands are:', ', '.join(avail_cmds))
        exit(1)
    cmd()
