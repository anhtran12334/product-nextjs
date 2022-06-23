
import Layout from '../Component/Layout'


export default function Home() {
  return (
    <Layout>
        <div className='list-brands'>
          <h6>Feature Brands</h6>
          <div className='brands'>
          <div className='brand'></div>
          <div className='brand'></div>
          <div className='brand'></div>
          <div className='brand'></div>
          <div className='brand'></div>
          </div>
          <div className='see-more'>See More</div>
        </div>
        <div className='category-segment'>
          <h6>Category</h6>
          <div className='list-category'>
          <div className='category'>Tshirt</div>
          <div className='category'>Jacket</div>
          <div className='category'>Skirt</div>
          <div className='category'>Shorts</div>
          <div className='category'>Vest</div>
          </div>
        </div>
        <div className='list-products'>
          <div className='product'>
            <div className='thumbnail-product'></div>
            <div className='infor-product'>
              <div className='name'>Product's name</div>
              <div className='brand'>Brands</div>
              <div className='price'>xxx.000đ</div>
              <div className='detail'>see-more</div>
            </div>
          </div>
          <div className='product'>
            <div className='thumbnail-product'></div>
            <div className='infor-product'>
              <div className='name'>Product's name</div>
              <div className='brand'>Brands</div>
              <div className='price'>xxx.000đ</div>
              <div className='detail'>see-more</div>
            </div>
          </div>
          <div className='product'>
            <div className='thumbnail-product'></div>
            <div className='infor-product'>
              <div className='name'>Product's name</div>
              <div className='brand'>Brands</div>
              <div className='price'>xxx.000đ</div>
              <div className='detail'>see-more</div>
            </div>
          </div>
          <div className='product'>
            <div className='thumbnail-product'></div>
            <div className='infor-product'>
              <div className='name'>Product's name</div>
              <div className='brand'>Brands</div>
              <div className='price'>xxx.000đ</div>
              <div className='detail'>see-more</div>
            </div>
          </div>
        </div>
    </Layout>
  )
}
