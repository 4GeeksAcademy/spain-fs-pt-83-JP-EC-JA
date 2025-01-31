"""empty message

Revision ID: d748535bbf14
Revises: f167f891f8f5
Create Date: 2025-01-29 18:28:37.393545

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd748535bbf14'
down_revision = 'f167f891f8f5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('password', sa.String(length=80), nullable=False))
        batch_op.drop_column('password_hash')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('password_hash', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
        batch_op.drop_column('password')

    # ### end Alembic commands ###
