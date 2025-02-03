"""empty message

Revision ID: 366471f6049a
Revises: be97c49d9d28
Create Date: 2025-02-02 19:16:09.756142

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '366471f6049a'
down_revision = 'be97c49d9d28'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('favorite', schema=None) as batch_op:
        batch_op.drop_constraint('favorite_user_id_fkey', type_='foreignkey')
        batch_op.create_foreign_key(None, 'user', ['user_id'], ['id'], ondelete='CASCADE')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('favorite', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.create_foreign_key('favorite_user_id_fkey', 'user', ['user_id'], ['id'])

    # ### end Alembic commands ###
